import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const data = fs.readFileSync("app/resources/resourceData.ts", "utf8");
const view = fs.readFileSync("app/resources/ResourceView.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const slug = "cannabis-dispensary-vs-weed-dispensary";

test("GPC01 publishes one approved dispensary terminology resource", () => {
  assert.match(data, new RegExp(`slug: "${slug}"`));
  assert.match(data, /Cannabis vs Weed Dispensary Guide \| Green Pentagon Cannabis/);
  assert.match(data, /Cannabis Dispensary vs\. Weed Dispensary in Local Search/);
  assert.match(data, /cannabis dispensary near me/);
  assert.match(data, /weed dispensary near me/);
  assert.match(data, /Frequently Asked Questions/);
});

test("resource links to the protected owner and omits workflow and commercial claims", () => {
  const start = data.indexOf(`slug: "${slug}"`);
  const end = data.indexOf('slug: "weed-flower-guide"', start);
  const resource = data.slice(start, end);
  assert.match(resource, /href: "\/weed-dispensary-toronto"/);
  assert.doesNotMatch(resource, /local entity|Business Profile|primary destination|visit intent|established local resource|canonical|internal link/i);
  assert.doesNotMatch(resource, /price|deal|stock|availability|order now|buy now|delivery/i);
  assert.equal(data.split(`href: "/resources/${slug}"`).length - 1, 1);
});

test("dynamic resources retain preferred www metadata and sitemap generation", () => {
  assert.match(view, /page\.faqHeading \|\| "Green Pentagon Cannabis Weed & Flower Questions"/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(sitemap, /https:\/\/www\.greenpentagoncannabis\.com/);
});
