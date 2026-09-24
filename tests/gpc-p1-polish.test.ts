import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { getSeoPageBySlug, SEO_PAGES } from "../app/lib/seoPages.ts";
import { RESOURCE_PAGES } from "../app/resources/resourceData.ts";
import { pageTitle } from "../app/lib/storeNap.ts";

const BRAND = "Green Pentagon Cannabis";

/** Mirrors root layout title.template: "%s | Green Pentagon Cannabis". */
function documentTitle(value: string | { absolute: string }) {
  return typeof value === "string" ? `${value} | ${BRAND}` : value.absolute;
}

function brandCount(title: string) {
  return title.match(/green pentagon/gi)?.length ?? 0;
}

/** Prose captured from https://www.kensingtongreencannabis.com/info/native-cigarettes-dundas-west on 2026-09-24. */
const KSC_CIG_PROSE = [
  "A Dundas West guide for adults comparing cigarette names and package styles before a walk-in visit near Roncesvalles.",
  "Use these names as a browsing guide, then check the current cigarette menu or ask at the Dundas West counter before making a special trip.",
  "Kensington Green is at 2257 Dundas St W near Roncesvalles.",
  "This page helps adults plan the cigarette portion of a visit without turning a brand preview into a stock promise.",
  "Use the cigarette category to review the public names and package details shown for Kensington Green.",
  "If one exact brand or style matters, check the current menu or ask at the counter before making a special trip.",
  "The visit page brings together the address, phone, transit notes and parking guidance.",
  "Flower tiers and other categories stay on their own pages so the cigarette guide remains easy to follow.",
  "Category details can change.",
  "Treat this guide as an introduction, then use the current cigarette menu for the most recent public information.",
  "Current Details Come From the Menu",
  "Kensington Green is at 2257 Dundas St W near Roncesvalles in Toronto.",
  "Use the current cigarette category and ask at the counter when one exact brand or package style matters.",
  "Does this guide guarantee that every pictured brand is in stock?",
  "No. The page is a browsing guide and does not guarantee stock, price or availability.",
  "The page is a browsing guide and does not guarantee stock, price or availability.",
  "Use the Kensington Green visit page for the address, transit notes and parking guidance.",
  "Plan a Native cigarette stop at Kensington Green on Dundas West near Roncesvalles.",
  "Review the cigarette guide, menu and visit information before heading over.",
  "Current Details Come From the Menu Category details can change.",
];

function sentences(text: string) {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function cigCopy() {
  const page = getSeoPageBySlug("native-cigarettes-queen-west");
  assert.ok(page);
  return [
    page.metaDescription,
    page.h1,
    page.heroTagline,
    page.heroPreview?.intro ?? "",
    page.heroPreview?.disclosure ?? "",
    ...page.sections.flatMap((section) => [section.heading, section.body]),
    ...page.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join("\n");
}

test("pageTitle keeps the brand once in the document title", () => {
  const samples = [
    ...SEO_PAGES.map((page) => page.title),
    ...RESOURCE_PAGES.map((page) => page.seoTitle),
    fs.readFileSync("app/lib/products.ts", "utf8").match(
      /seoTitle:\s*\n?\s*"Native Cigarettes[^"]+"/,
    )?.[0].replace(/^seoTitle:\s*"|"$/g, "") ?? "",
    "Nicotine Vapes Queen West | Green Pentagon Cannabis",
    "Contact Us Green Pentagon Cannabis | 1267 Queen St W, Parkdale",
    "Cannabis Arcade Games Green Pentagon Cannabis | Toronto",
    "Pink Kush | PREMIUM | Green Pentagon Cannabis Toronto",
    "Staff Photo",
    "Vape Pens Toronto THC & Nicotine Cartridges",
  ];

  for (const sample of samples) {
    const resolved = documentTitle(pageTitle(sample));
    assert.equal(brandCount(resolved), 1, resolved);
    assert.doesNotMatch(resolved, /Green Pentagon(?: Cannabis)? \| Green Pentagon/);
  }
});

test("Queen West cigarette copy shares no 60-character sentence with Kensington Green", () => {
  const copy = cigCopy();
  const ours = new Set(sentences(copy).filter((sentence) => sentence.length >= 60));

  for (const shared of KSC_CIG_PROSE) {
    if (shared.length < 60) continue;
    assert.equal(copy.includes(shared), false, shared);
    for (const sentence of ours) {
      assert.notEqual(sentence, shared);
    }
  }

  assert.match(copy, /1267 Queen St W/);
  assert.match(copy, /M6K 2J2/);
  assert.match(copy, /\+1 \(437\) 290-3657/);
  assert.match(copy, /10:00 AM/);
  assert.match(copy, /12:00 AM/);
  assert.match(copy, /19/);
  assert.match(copy, /Queen West/);
  assert.match(copy, /Parkdale/);
  assert.doesNotMatch(copy, /24[\s-]*hour|open 24|3\.5\s?g|7\s?g|Kensington|sister store|Athena/i);
});
