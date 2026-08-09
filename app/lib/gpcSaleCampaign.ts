import type { FlowerProduct, PricePoint } from "./products";

export const GPC_SALE_START_DATE = "2026-07-26";
export const GPC_SALE_END_DATE = "2026-09-26";
export const GPC_SALE_END_LABEL = "September 26, 2026";
export const GPC_SALE_CANCELLED = true;

export const GPC_SALE_LINES = [
  "AA 5g $5 OFF",
  "AAA+ 3g & 6g $5 OFF",
  "Premium 3g & 6g $10 OFF",
  "Exotic 3g & 6g $10 OFF",
] as const;

type CampaignRule = {
  minSku: number;
  maxSku: number;
  excludedSkus: ReadonlySet<number>;
  tier: string;
  discount: number;
  weights: readonly ("price3g" | "price5g")[];
};

const CAMPAIGN_RULES: readonly CampaignRule[] = [
  {
    minSku: 200,
    maxSku: 299,
    excludedSkus: new Set([288, 289]),
    tier: "AA",
    discount: 5,
    weights: ["price5g"],
  },
  {
    minSku: 300,
    maxSku: 399,
    excludedSkus: new Set([388, 389]),
    tier: "AAA+",
    discount: 5,
    weights: ["price3g", "price5g"],
  },
  {
    minSku: 400,
    maxSku: 499,
    excludedSkus: new Set([488, 489]),
    tier: "PREMIUM",
    discount: 10,
    weights: ["price3g", "price5g"],
  },
  {
    minSku: 500,
    maxSku: 599,
    excludedSkus: new Set([588, 589]),
    tier: "EXOTIC",
    discount: 10,
    weights: ["price3g", "price5g"],
  },
] as const;

export function getTorontoDateKey(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value || "";
  return `${value("year")}-${value("month")}-${value("day")}`;
}

export function isGpcSaleCampaignActive(now = new Date()): boolean {
  if (GPC_SALE_CANCELLED) return false;
  const dateKey = getTorontoDateKey(now);
  return dateKey >= GPC_SALE_START_DATE && dateKey <= GPC_SALE_END_DATE;
}

function discountedPrice(point: PricePoint, discount: number): PricePoint {
  const campaignSale = Math.max(0, point.regular - discount);
  return {
    ...point,
    sale: campaignSale,
  };
}

export function hasExistingSaleMarker(flower: FlowerProduct): boolean {
  const pricePoints = [
    flower.price3g,
    flower.price5g,
    flower.price14g,
    flower.price28g,
  ];

  return (
    flower.isSale ||
    /\bSALE\b/i.test(String(flower.name || "")) ||
    /\bSALE\b/i.test(String(flower.type || "")) ||
    pricePoints.some((point) => point?.sale !== null && point?.sale !== undefined)
  );
}

export function applyGpcSaleCampaign(
  flower: FlowerProduct,
  now = new Date(),
): FlowerProduct {
  if (!isGpcSaleCampaignActive(now)) return flower;
  if (hasExistingSaleMarker(flower)) return flower;

  const sku = Number.parseInt(String(flower.sku).trim(), 10);
  if (!Number.isInteger(sku)) return flower;

  const normalizedTier = String(flower.tier).trim().toUpperCase();
  const rule = CAMPAIGN_RULES.find(
    (candidate) =>
      normalizedTier === candidate.tier &&
      sku >= candidate.minSku &&
      sku <= candidate.maxSku &&
      !candidate.excludedSkus.has(sku),
  );
  if (!rule) return flower;

  const updated = { ...flower };
  let changed = false;

  for (const weight of rule.weights) {
    const point = flower[weight];
    if (!point) continue;
    updated[weight] = discountedPrice(point, rule.discount);
    changed = true;
  }

  return changed ? { ...updated, isSale: true } : flower;
}

export function applyGpcSaleCampaignToFlowers(
  flowers: readonly FlowerProduct[],
  now = new Date(),
): FlowerProduct[] {
  return flowers.map((flower) => applyGpcSaleCampaign(flower, now));
}
