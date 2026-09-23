import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const home = fs.readFileSync("app/page.tsx", "utf8");

test("homepage bridges the five existing Queen West information owners", () => {
  assert.match(home, /Explore Green Pentagon Cannabis Guides/);
  for (const href of [
    "/info/queen-west-weed-dispensary",
    "/visit",
    "/delivery",
    "/info/native-cigarettes-queen-west",
    "/info/nicotine-vapes-queen-west",
  ]) assert.ok(home.includes(`href="${href}"`), `missing ${href}`);
});

test("homepage bridge does not invent 24-hour or stock claims", () => {
  const bridge = home.slice(home.indexOf("green-pentagon-guides"), home.indexOf("FEATURED PRODUCTS"));
  assert.doesNotMatch(bridge, /24.hour|open now|in stock|available today/i);
});
