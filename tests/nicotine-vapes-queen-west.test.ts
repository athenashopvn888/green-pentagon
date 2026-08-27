import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import {
  getSeoPageBySlug,
  NICOTINE_VAPES_QUEEN_WEST_PRODUCTS,
} from "../app/lib/seoPages.ts";

const expectedSlugs = [
  "geek-max-5-20k30k-puffs-many-flavors",
  "ovns-10000-5-10k-puffs",
  "ovns-disposable-5-8ml-many-flavors",
];

test("Queen West nicotine guide uses exactly three audited cards", () => {
  assert.deepEqual(
    NICOTINE_VAPES_QUEEN_WEST_PRODUCTS.map((product) => product.slug),
    expectedSlugs,
  );
  assert.ok(
    NICOTINE_VAPES_QUEEN_WEST_PRODUCTS.every((product) =>
      product.image.startsWith("https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/"),
    ),
  );
});

test("guide stays guarded and scoped to the nicotine category", () => {
  const page = getSeoPageBySlug("nicotine-vapes-queen-west");
  assert.ok(page?.heroPreview);
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.equal(page.heroPreview.products.length, 3);
  assert.match(page.heroPreview.warning ?? "", /Adults 19\+\. Nicotine is addictive\./);
  assert.match(page.heroPreview.disclosure, /not a complete selection/i);
  assert.equal(page.showTierGrid, false);
  assert.equal(page.showVisitSection, false);
  assert.equal(page.relatedLink?.href, "/info/native-cigarettes-queen-west");
});

test("renderer and footer discover the approved route without excluded products", () => {
  const renderer = fs.readFileSync(path.join(process.cwd(), "app/info/[seoPage]/page.tsx"), "utf8");
  const footer = fs.readFileSync(path.join(process.cwd(), "app/components/Footer.tsx"), "utf8");
  const serialized = JSON.stringify(getSeoPageBySlug("nicotine-vapes-queen-west"));

  assert.match(renderer, /data-product-slug/);
  assert.match(renderer, /hideThcVape/);
  assert.match(footer, /\/info\/nicotine-vapes-queen-west/);
  for (const excluded of [
    "cocobar-5-12k-puffs",
    "2g-dual-chamber-goober-vape-pen",
    "drizzle-switch-3in1-1g",
    "/items/vape-disposables",
  ]) {
    assert.equal(serialized.includes(excluded), false, excluded);
  }
});
