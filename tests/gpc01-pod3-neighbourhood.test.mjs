import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const nap = fs.readFileSync("app/lib/storeNap.ts", "utf8");
const home = fs.readFileSync("app/page.tsx", "utf8");
const visit = fs.readFileSync("app/visit/page.tsx", "utf8");
const navbar = fs.readFileSync("app/components/Navbar.tsx", "utf8");
const footer = fs.readFileSync("app/components/Footer.tsx", "utf8");
const ownerPage = fs.readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const deliveryPage = fs.readFileSync("app/delivery/page.tsx", "utf8");
const deliveryCatalog = fs.readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
const nextConfig = fs.readFileSync("next.config.ts", "utf8");
const faq = fs.readFileSync("app/faq/page.tsx", "utf8");
const seoPages = fs.readFileSync("app/lib/seoPages.ts", "utf8");
const resources = fs.readFileSync("app/resources/resourceData.ts", "utf8");
const publicSurfaces = [home, visit, faq, seoPages, resources, deliveryCatalog, layout, nap].join("\n");

test("CannabisStore schema uses the locked NAP and www host", () => {
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(nap, /"@type": "CannabisStore"/);
  assert.match(nap, /telephone: nap\.phoneIntl/);
  assert.match(nap, /phoneIntl: "\+14372903657"/);
  assert.match(nap, /streetAddress: "1267 Queen St W"/);
  assert.match(nap, /postalCode: "M6K 2J2"/);
  assert.match(nap, /origin: "https:\/\/www\.greenpentagoncannabis\.com"/);
  assert.match(nap, /hoursOpens: "10:00"/);
  assert.match(nap, /hoursCloses: "00:00"/);
  assert.doesNotMatch(nap, /additionalType/);
  assert.doesNotMatch(nap, /4163885765|416-388-5765/);
});

test("homepage FAQPage JSON-LD mirrors visible FAQs and corridor copy", () => {
  assert.match(home, /faqPageJsonLd\(HOME_FAQS\)/);
  assert.match(nap, /What are the hours for Green Pentagon Cannabis on Queen West\?/);
  assert.match(home, /LOCAL_FAQS = HOME_FAQS/);
  assert.match(home, /Green Pentagon Cannabis \| Parkdale \/ Queen West Dispensary/);
  assert.doesNotMatch(home, /electrifying menu|Toronto's local cannabis stop/i);
  assert.doesNotMatch(home, /416-388-5765|4163885765/);
  assert.match(home, /pickFeaturedStrains/);
});

test("/visit is a how-to-reach page with transit, parking, and full NAP", () => {
  assert.match(visit, /How to Get to Green Pentagon Cannabis on Queen West/);
  assert.match(visit, /501 Queen/);
  assert.match(visit, /Brock/);
  assert.match(visit, /Green P/);
  assert.match(visit, /1267 Queen St W/);
  assert.match(visit, /M6K 2J2/);
  assert.match(visit, /\+1 \(437\) 290-3657/);
  assert.match(visit, /Adults 19\+/);
  assert.match(visit, /mapEmbedUrl/);
  assert.match(visit, /faqPageJsonLd\(VISIT_FAQS\)/);
  assert.match(navbar, /href: "\/visit"/);
  assert.match(footer, /href="\/visit"/);
});

test("/location aliases to /visit", () => {
  assert.match(nextConfig, /source: "\/location", destination: "\/visit", permanent: true/);
});

test("city owner and delivery URLs are demoted or neighbourhood-scoped", () => {
  assert.match(ownerPage, /index: false/);
  assert.match(ownerPage, /canonical: `\$\{STORE_NAP\.origin\}\/visit`/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.match(sitemap, /priority: 0\.2/);
  assert.match(deliveryPage, /Parkdale \/ Queen West Cannabis Delivery/);
  assert.match(deliveryCatalog, /Cannabis Delivery for Parkdale/);
  assert.match(deliveryCatalog, /Dufferin–Brock/);
  assert.doesNotMatch(deliveryCatalog, /POD 3 DELIVERY/);
  assert.match(deliveryCatalog, /<noscript>/);
});

test("header, footer, and schema share the same phone and address", () => {
  assert.match(navbar, /STORE_NAP\.streetAddress/);
  assert.match(navbar, /STORE_NAP\.phoneIntl/);
  assert.match(footer, /nap\.streetAddress/);
  assert.match(footer, /nap\.phoneDisplay/);
  assert.match(layout, /nap\.phoneDisplay/);
});

test("adults 19+ and no medical claims in the new catch-up surfaces", () => {
  assert.match(visit, /Adults 19\+/);
  assert.match(home, /adults 19\+/i);
  assert.doesNotMatch([visit, home, faq].join("\n"), /treats anxiety|medical marijuana|prescrib/i);
});

test("copy stays Queen West / Parkdale and never names sister stores", () => {
  assert.doesNotMatch(publicSurfaces, /Kensington Green|Gas Junction|King Rock|sister store|POD ?3 shops/i);
  assert.doesNotMatch(visit, /Dundas West|Howard Park|Sorauren|505 Dundas/);
  assert.match(seoPages, /showTierGrid: false/);
  assert.match(seoPages, /501 Queen streetcar/);
});
