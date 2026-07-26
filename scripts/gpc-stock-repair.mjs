const WEIGHT_FIELDS = {
  price3g: "3g",
  price5g: "5g",
  price14g: "14g",
  price28g: "28g",
};

export function hasPositiveStock(stockEntry, weight) {
  return Number(stockEntry && stockEntry[weight]) > 0;
}

export function maskUnavailableWeights(flower, stockEntry) {
  const masked = { ...flower };
  for (const [field, weight] of Object.entries(WEIGHT_FIELDS)) {
    if (!hasPositiveStock(stockEntry, weight)) masked[field] = null;
  }
  return masked;
}

function hasVisiblePrice(flower) {
  return Object.keys(WEIGHT_FIELDS).some((field) => flower[field] !== null);
}

export function reconcileGpcFlowers(
  fullFlowers,
  stockResponse,
  supplementalConfig,
) {
  if (!Array.isArray(fullFlowers)) {
    throw new Error("GPC full response is missing flowers");
  }
  if (!stockResponse || !stockResponse.stock) {
    throw new Error("GPC stock-only response is missing stock");
  }

  const stock = stockResponse.stock;
  const catalog = Array.isArray(supplementalConfig.catalog)
    ? supplementalConfig.catalog
    : [];
  const missingPriceOverrides =
    supplementalConfig.missingPriceOverrides || {};
  const intendedTierBySku = supplementalConfig.intendedTierBySku || {};
  const supplementalBySku = new Map(
    catalog.map((flower) => [String(flower.sku), flower]),
  );

  const candidates = [];
  const fullSkus = new Set();
  for (const flower of fullFlowers) {
    const sku = String(flower.sku);
    fullSkus.add(sku);
    const local = supplementalBySku.get(sku);
    candidates.push(local ? { ...local, ...flower } : flower);
  }
  for (const flower of catalog) {
    if (!fullSkus.has(String(flower.sku))) candidates.push(flower);
  }

  const reconciled = [];
  const seenSkus = new Set();
  for (const candidate of candidates) {
    const sku = String(candidate.sku);
    const stockEntry = stock[sku];
    if (!stockEntry) continue;

    const intendedTier = intendedTierBySku[sku];
    if (
      intendedTier &&
      String(candidate.tier).toUpperCase() !== intendedTier.toUpperCase()
    ) {
      continue;
    }
    if (seenSkus.has(sku)) continue;

    const withOverrides = { ...candidate };
    const overrides = missingPriceOverrides[sku] || {};
    for (const field of Object.keys(WEIGHT_FIELDS)) {
      if (withOverrides[field] === null && overrides[field]) {
        withOverrides[field] = overrides[field];
      }
    }

    const masked = maskUnavailableWeights(withOverrides, stockEntry);
    if (!hasVisiblePrice(masked)) continue;

    reconciled.push(masked);
    seenSkus.add(sku);
  }

  return reconciled;
}
