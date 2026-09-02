import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const products = readFileSync("app/lib/products.ts", "utf8");
const resources = readFileSync("app/resources/resourceData.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");

test("all five verified Green Pentagon tier keys have reviewed copy", () => {
  for (const key of ["EXOTIC", "PREMIUM", '"AAA+"', "AA", "BUDGET"]) {
    assert.ok(tierCopy.includes(`${key}:`), `missing ${key}`);
  }
  assert.match(tierPage, /TIER_META_DESCRIPTION\[tierInfo\.key\]/);
  assert.match(tierPage, /TIER_H1\[tierInfo\.key\]/);
  assert.match(tierPage, /absolute: seo\?\.seoTitle/);
});

test("tier canonicals and protected broad Weed owner stay in place", () => {
  assert.match(tierPage, /canonical: `https:\/\/www\.greenpentagoncannabis\.com\/\$\{tierSlug\}`/);
  assert.match(footer, /href="\/info\/queen-west-weed-dispensary"/);
});

test("V2 tier and resource routes are the only linked campaign canonicals", () => {
  for (const [legacy, canonical] of [
    ["/exotic", "/exotic-weed"],
    ["/premium", "/premium-weed"],
    ["/aaa", "/aaa-weed"],
    ["/aa", "/aa-weed"],
    ["/budget", "/budget-weed"],
    ["/resources/flower-guide", "/resources/weed-flower-guide"],
  ]) {
    assert.match(redirects, new RegExp(`source: "${legacy}".*destination: "${canonical}"`, "s"));
  }
  for (const slug of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(products, new RegExp(`slug: "${slug}"`));
  }
  assert.match(resources, /slug: "weed-flower-guide"/);
});

test("every tier-facing name, title and H1 includes Weed", () => {
  for (const label of ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]) {
    assert.match(products, new RegExp(`name: "${label.replace("+", "\\+")}"`));
    assert.match(tierCopy, new RegExp(label.replace("+", "\\+")));
  }
});

test("new tier copy omits unverified hours and commercial claims", () => {
  assert.doesNotMatch(tierCopy, /10:00|12:00|midnight|open daily|437[- )]|1267 Queen/i);
  assert.doesNotMatch(tierCopy, /now in stock|available today|free delivery|current menu|posted prices|same-day/i);
});
