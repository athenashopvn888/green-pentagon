import test from "node:test";
import assert from "node:assert/strict";
import {
  applyGpcSaleCampaign,
  getTorontoDateKey,
  isGpcSaleCampaignActive,
} from "../app/lib/gpcSaleCampaign.ts";
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

test("campaign observes inclusive Toronto dates and stops at midnight", () => {
  assert.equal(getTorontoDateKey(new Date("2026-07-26T03:59:59Z")), "2026-07-25");
  assert.equal(isGpcSaleCampaignActive(new Date("2026-07-26T03:59:59Z")), false);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-07-26T04:00:00Z")), true);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-09-27T03:59:59Z")), true);
  assert.equal(isGpcSaleCampaignActive(new Date("2026-09-27T04:00:00Z")), false);
});

test("AA range discounts only available 5g and honors boundaries", () => {
  const first = applyGpcSaleCampaign(flower("200", "AA"), activeDate);
  const last = applyGpcSaleCampaign(flower("299", "AA"), activeDate);
  assert.equal(first.price3g?.sale, null);
  assert.equal(first.price5g?.sale, 25);
  assert.equal(last.price5g?.sale, 25);
  assert.equal(applyGpcSaleCampaign(flower("199", "AA"), activeDate).price5g?.sale, null);
  assert.equal(applyGpcSaleCampaign(flower("300", "AA"), activeDate).price5g?.sale, null);
});

test("AAA+, Premium, and Exotic ranges discount 3g and displayed 6g", () => {
  const aaa = applyGpcSaleCampaign(flower("300", "AAA+"), activeDate);
  const premium = applyGpcSaleCampaign(flower("499", "PREMIUM"), activeDate);
  const exotic = applyGpcSaleCampaign(flower("500", "EXOTIC"), activeDate);
  assert.deepEqual([aaa.price3g?.sale, aaa.price5g?.sale], [15, 25]);
  assert.deepEqual([premium.price3g?.sale, premium.price5g?.sale], [10, 20]);
  assert.deepEqual([exotic.price3g?.sale, exotic.price5g?.sale], [10, 20]);
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

test("existing lower sale is preserved and unavailable weights stay unavailable", () => {
  const aaaExistingSale = applyGpcSaleCampaign(
    flower("392", "AAA+", {
      price3g: price(20, 10),
      price5g: price(30, 20),
    }),
    activeDate,
  );
  assert.equal(aaaExistingSale.price3g?.sale, 10);
  assert.equal(aaaExistingSale.price5g?.sale, 20);

  const existingSale = applyGpcSaleCampaign(
    flower("480", "PREMIUM", {
      price3g: price(30, 15),
      price5g: price(45, 30),
    }),
    activeDate,
  );
  assert.equal(existingSale.price3g?.sale, 15);
  assert.equal(existingSale.price5g?.sale, 30);

  const missingWeight = applyGpcSaleCampaign(
    flower("533", "EXOTIC", { price5g: null }),
    activeDate,
  );
  assert.equal(missingWeight.price3g?.sale, 10);
  assert.equal(missingWeight.price5g, null);

  const noEligibleWeight = applyGpcSaleCampaign(
    flower("205", "AA", { price5g: null }),
    activeDate,
  );
  assert.equal(noEligibleWeight.price5g, null);
  assert.equal(noEligibleWeight.isSale, false);
});

test("campaign returns regular data after its end date", () => {
  const original = flower("550", "EXOTIC");
  assert.equal(
    applyGpcSaleCampaign(original, new Date("2026-09-27T04:00:00Z")),
    original,
  );
});
