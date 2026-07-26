import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  getTv2DaytimePromo,
  isTv2Daytime,
  TV2_DAYTIME_PROMOS,
} from "../app/tv2/daytimePromos.ts";

function localTime(hour: number, minute = 0): Date {
  return new Date(2026, 6, 26, hour, minute, 0, 0);
}

test("TV2 daytime window is device-local 10:00 inclusive to 17:00 exclusive", () => {
  assert.equal(isTv2Daytime(localTime(9, 59)), false);
  assert.equal(isTv2Daytime(localTime(10, 0)), true);
  assert.equal(isTv2Daytime(localTime(16, 59)), true);
  assert.equal(isTv2Daytime(localTime(17, 0)), false);
});

test("daytime replaces only VAPES and CIGARETTES with their static promos", () => {
  assert.equal(
    getTv2DaytimePromo("VAPES", true),
    TV2_DAYTIME_PROMOS.VAPES,
  );
  assert.equal(
    getTv2DaytimePromo("CIGARETTES", true),
    TV2_DAYTIME_PROMOS.CIGARETTES,
  );
  assert.equal(getTv2DaytimePromo("EDIBLES", true), undefined);
});

test("nighttime restores normal rotating cards for VAPES and CIGARETTES", () => {
  assert.equal(getTv2DaytimePromo("VAPES", false), undefined);
  assert.equal(getTv2DaytimePromo("CIGARETTES", false), undefined);
});

test("VAPES promo uses the requested R2 creative with a local fallback", () => {
  assert.deepEqual(TV2_DAYTIME_PROMOS.VAPES, {
    src: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/cannabis_banner_mashup_variation_01_600x600.webp",
    fallbackSrc:
      "/banners/cannabis_banner_mashup_variation_01_600x600.webp",
    alt: "Ultimate Cannabis Collection Promo",
  });
  assert.deepEqual(TV2_DAYTIME_PROMOS.CIGARETTES, {
    src: "/banners/cig-poster-1.png",
    alt: "Cigarettes Promo",
  });
});

test("TV2 promo images retain square cover rendering and guarded fallback", () => {
  const page = readFileSync(
    new URL("../app/tv2/page.tsx", import.meta.url),
    "utf8",
  );
  const styles = readFileSync(
    new URL("../app/tv2/tv2.module.css", import.meta.url),
    "utf8",
  );

  assert.match(page, /data-promo-card=\{card\.id\}/);
  assert.match(page, /target\.dataset\.fallbackApplied !== "true"/);
  assert.match(styles, /\.promoImg[\s\S]*object-fit:\s*cover/);
  assert.match(
    styles,
    /\[data-promo-card="VAPES"\] \.promoImg[\s\S]*object-position:\s*center top/,
  );
});
