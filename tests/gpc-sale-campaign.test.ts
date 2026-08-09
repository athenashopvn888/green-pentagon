import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  applyGpcSaleCampaign,
  getTorontoDateKey,
  hasExistingSaleMarker,
  isGpcSaleCampaignActive,
} from "../app/lib/gpcSaleCampaign.ts";
import { TOP_TIER_BUNDLE_LABELS } from "../app/tv/bundleLabels.ts";
import type { FlowerProduct, PricePoint } from "../app/lib/products.ts";

const activeDate = new Date("2026-08-15T16:00:00Z");

function price(regular: number, sale: number | null = null): PricePoint {
  return { regular, sale };
}

function flower(
  sku: string,
  tier: string,
  overrides: Partial<FlowerProduct> = {},
): FlowerProduct {
  return {
    sku,
    tier,
    name: `SKU ${sku}`,
    slug: `sku-${sku}`,
    type: "indica",
    isHot: false,
    isSale: false,
    thc: "30%",
    price3g: price(20),
    price5g: price(30),
    price14g: price(70),
    price28g: price(120),
    image: "/test.webp",
    ...overrides,
  };
}

test("cancelled campaign remains inactive throughout its former date range", () => {
  assert.equal(getTorontoDateKey(new Date("2026-07-26T03:59:59Z")), "2026-07-25");
  assert.equal(isGpcSaleCampaignActive(new Date("2026-07-26T03:59:59Z")), false);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-07-26T04:00:00Z")), false);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-08-15T16:00:00Z")), false);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-09-27T03:59:59Z")), false);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-09-27T04:00:00Z")), false);
});

test("AA range keeps regular prices without the cancelled discount", () => {
  const first = applyGpcSaleCampaign(flower("200", "AA"), activeDate);
  const last = applyGpcSaleCampaign(flower("299", "AA"), activeDate);
  assert.equal(first.price3g?.sale, null);
  assert.equal(first.price5g?.sale, null);
  assert.equal(last.price5g?.sale, null);
  assert.equal(applyGpcSaleCampaign(flower("199", "AA"), activeDate).price5g?.sale, null);
  assert.equal(applyGpcSaleCampaign(flower("300", "AA"), activeDate).price5g?.sale, null);
});

test("AAA+, Premium, and Exotic ranges keep regular prices", () => {
  const aaa = applyGpcSaleCampaign(flower("300", "AAA+"), activeDate);
  const premium = applyGpcSaleCampaign(flower("499", "PREMIUM"), activeDate);
  const exotic = applyGpcSaleCampaign(flower("500", "EXOTIC"), activeDate);
  assert.deepEqual([aaa.price3g?.sale, aaa.price5g?.sale], [null, null]);
  assert.deepEqual([premium.price3g?.sale, premium.price5g?.sale], [null, null]);
  assert.deepEqual([exotic.price3g?.sale, exotic.price5g?.sale], [null, null]);
});

test("excluded SKUs do not receive campaign pricing", () => {
  const cases: Array<[string, string]> = [
    ["288", "AA"],
    ["289", "AA"],
    ["388", "AAA+"],
    ["389", "AAA+"],
    ["488", "PREMIUM"],
    ["489", "PREMIUM"],
    ["588", "EXOTIC"],
    ["589", "EXOTIC"],
  ];
  for (const [sku, tier] of cases) {
    const result = applyGpcSaleCampaign(flower(sku, tier), activeDate);
    assert.equal(result.price3g?.sale, null);
    assert.equal(result.price5g?.sale, null);
    assert.equal(result.isSale, false);
  }
});

test("tier match prevents AAA+ campaign from leaking to Budget duplicates", () => {
  const duplicate = applyGpcSaleCampaign(flower("392", "BUDGET"), activeDate);
  assert.equal(duplicate.price3g?.sale, null);
  assert.equal(duplicate.price5g?.sale, null);
});

test("existing-sale Budget records for 392 and 396 remain exactly unchanged", () => {
  for (const sku of ["392", "396"]) {
    const duplicate = flower(sku, "BUDGET", {
      isSale: true,
      price3g: price(20, 10),
      price5g: price(30, 20),
    });
    assert.equal(applyGpcSaleCampaign(duplicate, activeDate), duplicate);
    assert.equal(duplicate.price3g?.sale, 10);
    assert.equal(duplicate.price5g?.sale, 20);
  }
});

test("existing-sale products are wholly excluded even when their sale is higher", () => {
  const markedByFlag = flower("392", "AAA+", {
    isSale: true,
    price3g: price(20),
    price5g: price(30),
  });
  assert.equal(applyGpcSaleCampaign(markedByFlag, activeDate), markedByFlag);

  const markedByPrice = flower("480", "PREMIUM", {
    price3g: price(30, 25),
    price5g: price(45, 40),
  });
  assert.equal(applyGpcSaleCampaign(markedByPrice, activeDate), markedByPrice);
  assert.equal(markedByPrice.price3g?.sale, 25);
  assert.equal(markedByPrice.price5g?.sale, 40);

  const markedByName = flower("550", "EXOTIC", {
    name: "PINK STARKILLER ON SALE",
  });
  assert.equal(applyGpcSaleCampaign(markedByName, activeDate), markedByName);

  const markedByType = flower("561", "EXOTIC", {
    type: "SH SALE" as FlowerProduct["type"],
  });
  assert.equal(applyGpcSaleCampaign(markedByType, activeDate), markedByType);

  for (const marked of [
    markedByFlag,
    markedByPrice,
    markedByName,
    markedByType,
  ]) {
    assert.equal(hasExistingSaleMarker(marked), true);
  }
});

test("regular products keep unavailable weights unavailable", () => {
  const missingWeight = applyGpcSaleCampaign(
    flower("533", "EXOTIC", { price5g: null }),
    activeDate,
  );
  assert.equal(missingWeight.price3g?.sale, null);
  assert.equal(missingWeight.price5g, null);

  const noEligibleWeight = applyGpcSaleCampaign(
    flower("205", "AA", { price5g: null }),
    activeDate,
  );
  assert.equal(noEligibleWeight.price5g, null);
  assert.equal(noEligibleWeight.isSale, false);
});

test("current deeper-sale examples remain completely unchanged", () => {
  const aaaExistingSale = flower("392", "AAA+", {
    isSale: true,
    price3g: price(20, 10),
    price5g: price(30, 20),
  });
  assert.equal(
    applyGpcSaleCampaign(aaaExistingSale, activeDate),
    aaaExistingSale,
  );

  const exoticExistingSale = flower("550", "EXOTIC", {
    isSale: true,
    price3g: price(40, 30),
    price5g: price(60, 45),
  });
  assert.equal(
    applyGpcSaleCampaign(exoticExistingSale, activeDate),
    exoticExistingSale,
  );
});

test("sale UI uses semantic struck-through regular-price markup and styles", () => {
  const flowerCard = readFileSync(
    new URL("../app/components/FlowerCard.tsx", import.meta.url),
    "utf8",
  );
  const flowerDetail = readFileSync(
    new URL("../app/flower/[slug]/page.tsx", import.meta.url),
    "utf8",
  );
  const tvPage = readFileSync(
    new URL("../app/tv/page.tsx", import.meta.url),
    "utf8",
  );
  const cardStyles = readFileSync(
    new URL("../app/components/FlowerCard.module.css", import.meta.url),
    "utf8",
  );
  const detailStyles = readFileSync(
    new URL("../app/flower/[slug]/flower.module.css", import.meta.url),
    "utf8",
  );
  const tvStyles = readFileSync(
    new URL("../app/tv/tv.module.css", import.meta.url),
    "utf8",
  );

  assert.match(flowerCard, /<del className=\{styles\.priceOld\}>/);
  assert.match(flowerDetail, /<del className=\{styles\.priceOld\}>/);
  assert.match(tvPage, /<del className=\{styles\.oldPrice\}>/);
  assert.match(cardStyles, /\.priceOld[\s\S]*text-decoration:\s*line-through/);
  assert.match(detailStyles, /\.priceOld[\s\S]*text-decoration:\s*line-through/);
  assert.match(tvStyles, /\.oldPrice[\s\S]*text-decoration:\s*line-through/);
});

test("TV top-tier rows state both bundle mechanics beside every price", () => {
  const tvPage = readFileSync(
    new URL("../app/tv/page.tsx", import.meta.url),
    "utf8",
  );

  assert.deepEqual(TOP_TIER_BUNDLE_LABELS, {
    price3g: "2G = 3G",
    price5g: "3G = 6G",
  });
  assert.match(tvPage, /TOP_TIER_BUNDLE_LABELS\.price3g/);
  assert.match(tvPage, /TOP_TIER_BUNDLE_LABELS\.price5g/);
  assert.doesNotMatch(tvPage, /f\.isSale\s*\?\s*"3G="/);
  assert.doesNotMatch(tvPage, /f\.isSale\s*\?\s*"6G="/);
  assert.match(
    tvPage,
    /pp\.sale !== null && pp\.sale !== pp\.regular/,
  );
  assert.match(tvPage, /<del className=\{styles\.oldPrice\}>/);
  assert.match(tvPage, /return <b className=\{color \|\| ''\}>\$\{pp\.regular\}<\/b>/);
});

test("TV sale alert uses red black and gold without rainbow animation", () => {
  const tvStyles = readFileSync(
    new URL("../app/tv/tv.module.css", import.meta.url),
    "utf8",
  );

  assert.match(tvStyles, /\.saleBanner[\s\S]*#facc15/);
  assert.match(tvStyles, /\.saleBanner[\s\S]*rgba\(0,\s*0,\s*0/);
  assert.match(tvStyles, /@keyframes saleAlertSweep/);
  assert.match(
    tvStyles,
    /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*\.saleBanner::after[\s\S]*animation:\s*none/,
  );
  assert.doesNotMatch(tvStyles, /saleHue|#00e5ff|#ab47bc/);
});

test("campaign returns regular data after its end date", () => {
  const original = flower("550", "EXOTIC");
  assert.equal(
    applyGpcSaleCampaign(original, new Date("2026-09-27T04:00:00Z")),
    original,
  );
});
