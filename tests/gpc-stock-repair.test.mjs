import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  reconcileGpcFlowers,
} from "../scripts/gpc-stock-repair.mjs";

const supplemental = JSON.parse(
  readFileSync(
    new URL("../scripts/gpc-supplemental-flowers.json", import.meta.url),
    "utf8",
  ),
);

function stock(entries) {
  return { storeCode: "GPC01", stock: entries };
}

test("supplement is included only for current positive GPC01 stock weights", () => {
  const result = reconcileGpcFlowers(
    [],
    stock({ "343": { "3g": 5, "5g": 4, "14g": 0 } }),
    supplemental,
  );

  assert.equal(result.length, 1);
  assert.equal(result[0].sku, "343");
  assert.deepEqual(result[0].price3g, { regular: 20, sale: null });
  assert.deepEqual(result[0].price5g, { regular: 30, sale: null });
  assert.equal(result[0].price14g, null);
});

test("supplement disappears as soon as its SKU is absent from stock", () => {
  const result = reconcileGpcFlowers([], stock({}), supplemental);
  assert.equal(result.some((flower) => flower.sku === "343"), false);
});

test("missing local price metadata is filled and unavailable weights are masked", () => {
  const fullFlower = {
    ...supplemental.catalog.find((flower) => flower.sku === "471"),
    price5g: null,
  };
  const result = reconcileGpcFlowers(
    [fullFlower],
    stock({ "471": { "3g": 0, "5g": 5, "14g": 0 } }),
    supplemental,
  );

  assert.equal(result.length, 1);
  assert.equal(result[0].price3g, null);
  assert.deepEqual(result[0].price5g, { regular: 45, sale: null });
  assert.equal(result[0].price14g, null);
});

test("392 and 396 retain only Budget records with sale values unchanged", () => {
  const duplicate = (sku, tier) => ({
    sku,
    name: `SKU ${sku}`,
    slug: `sku-${sku}`,
    tier,
    type: "indica",
    isHot: false,
    isSale: true,
    thc: "30%",
    price3g: { regular: 20, sale: 10 },
    price5g: { regular: 30, sale: 20 },
    price14g: null,
    price28g: null,
    image: "/test.webp",
  });
  const result = reconcileGpcFlowers(
    [
      duplicate("392", "BUDGET"),
      duplicate("392", "AAA+"),
      duplicate("396", "AAA+"),
      duplicate("396", "BUDGET"),
    ],
    stock({
      "392": { "3g": 2, "5g": 2 },
      "396": { "3g": 2, "5g": 2 },
    }),
    supplemental,
  );

  assert.deepEqual(
    result.map((flower) => [
      flower.sku,
      flower.tier,
      flower.price3g.sale,
      flower.price5g.sale,
    ]),
    [
      ["392", "BUDGET", 10, 20],
      ["396", "BUDGET", 10, 20],
    ],
  );
  assert.equal(result.filter((flower) => flower.sku === "392").length, 1);
  assert.equal(result.filter((flower) => flower.sku === "396").length, 1);
});

test("full-feed sale values survive supplemental reconciliation unchanged", () => {
  const fullFlower = {
    ...supplemental.catalog.find((flower) => flower.sku === "533"),
    isSale: true,
    price3g: { regular: 40, sale: 25 },
  };
  const result = reconcileGpcFlowers(
    [fullFlower],
    stock({ "533": { "3g": 2, "5g": 2 } }),
    supplemental,
  );

  assert.equal(result[0].isSale, true);
  assert.deepEqual(result[0].price3g, { regular: 40, sale: 25 });
  assert.deepEqual(result[0].price5g, { regular: 60, sale: null });
});
