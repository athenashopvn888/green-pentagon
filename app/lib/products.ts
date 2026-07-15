/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* Data imports (static fallback) */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* Live stock fetch from Apps Script */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return {
      flowers: allFlowers,
      items: allItems,
      isLive: false,
      stockDate: null,
    };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=GPC01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return {
      flowers: allFlowers,
      items: allItems,
      isLive: false,
      stockDate: null,
    };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string;
    slug: string;
    color: string;
    icon: string;
    tagline: string;
    banner: string;
    unitPrice: number /* $/g */;
    deal3g: {
      label: string;
      total: string;
      price: number;
    } | null /* 3g bundle pricing */;
    deal6g: {
      label: string;
      total: string;
      price: number;
    } | null /* 6g bundle pricing (top 3 only) */;
  }
> = {
  EXOTIC: {
    name: "Exotic",
    slug: "exotic",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the Exotic flower tier",
    banner: "/banners/exotics_banner.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium",
    slug: "premium",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Explore the Premium flower tier",
    banner: "/banners/premium_banner.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+",
    slug: "aaa",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Explore the AAA+ flower tier",
    banner: "/banners/aaa_plus_banner.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA",
    slug: "aa",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Explore the AA flower tier",
    banner: "/banners/aa_banner.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget",
    slug: "budget",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Explore the Budget flower tier",
    banner: "/banners/budget_banner.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* Item category config */
export interface CategoryInfo {
  name: string;
  slug: string;
  color: string;
  icon: string;
  banner?: string;
  seoTitle: string;
  seoIntro: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/edibles_prerolls_more_banner.webp",
    name: "Edibles",
    slug: "edibles",
    color: "#f97316",
    icon: "🍬",
    seoTitle: "Cannabis Edibles Toronto Gummies, Chocolates & Drinks",
    seoIntro:
      "Browse the full cannabis edibles menu at Green Pentagon Cannabis on Queen St W in Toronto. Green Pentagon Cannabis carries THC gummies, chocolates, drinks, and more from current menu brands.",
    seoDescription:
      "Browse the edibles category at Green Pentagon Cannabis for current menu names and package details. Visit us at 1267 Queen St W during posted store hours.",
    faqs: [
      {
        q: "What cannabis edibles do you carry?",
        a: "The menu may list gummies, chocolates, beverages, capsules, and baked goods. Review current names and package details.",
      },
      {
        q: "Where can I review edible details?",
        a: "Use the current edibles page and review the package details for each listing.",
      },
      {
        q: "Can I buy edibles at Green Pentagon Cannabis?",
        a: "Yes! Visit us at 1267 Queen St W, Toronto. We're open daily from 10:00 AM to 12:00 AM (midnight) with a full edibles selection in store.",
      },
    ],
  },
  "VAPE PENS": {
    banner: "/banners/01_Vape_Pens.webp",
    name: "THC Vape",
    slug: "vapes",
    color: "#8b5cf6",
    icon: "💨",
    seoTitle: "Vape Pens Toronto THC & Nicotine Cartridges",
    seoIntro:
      "Browse vape pens and compatible accessories at Green Pentagon Cannabis in Toronto. Review current menu and package details.",
    seoDescription:
      "Green Pentagon Cannabis carries a curated selection of vape pens and cartridges in Toronto. From 510-thread THC cartridges to nicotine vape pods, we stock the most popular brands and flavours. Our knowledgeable budtenders can help you choose the right cartridge and battery setup. Visit us at 1267 Queen St W for the useful vape selection in Queen West.",
    faqs: [
      {
        q: "What vape pens do you sell?",
        a: "We carry 510-thread THC cartridges, nicotine vape pods, disposable vapes, and compatible batteries from current menu brands.",
      },
      {
        q: "Do you sell vape batteries?",
        a: "Yes! We stock 510-thread batteries and pod systems that pair with our cartridge selection.",
      },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/02_Vape_Disposable.webp",
    name: "Nic Vape",
    slug: "vape-disposables",
    color: "#a78bfa",
    icon: "💨",
    seoTitle: "Disposable Vapes Toronto THC Disposable Pens",
    seoIntro:
      "Browse the disposable vape category at Green Pentagon Cannabis in Toronto and review current format details.",
    seoDescription:
      "The disposable vape category organizes current public menu listings by product name and format. Review package details before choosing. Visit us at 1267 Queen St W, Toronto.",
    faqs: [
      {
        q: "How long does a disposable vape last?",
        a: "Most disposable THC vapes contain 0.5g-1g of distillate and last between 100-300 puffs depending on usage.",
      },
      {
        q: "Are disposable vapes rechargeable?",
        a: "Most are designed for single use, but some models include a USB-C charging port to ensure you can use the full cartridge.",
      },
    ],
  },
  CONCENTRATES: {
    banner: "/banners/03_Concentrates.webp",
    name: "Concentrates",
    slug: "concentrates",
    color: "#f59e0b",
    icon: "💎",
    seoTitle: "Cannabis Concentrates Toronto Shatter, Wax, Hash & Live Resin",
    seoIntro:
      "Browse the concentrates category at Green Pentagon Cannabis in Toronto for current menu and package details.",
    seoDescription:
      "The concentrates category at Green Pentagon Cannabis groups menu listings such as hash, kief, shatter, wax, and live resin. Review the current menu and package details before visiting 1267 Queen St W.",
    faqs: [
      {
        q: "What types of concentrates do you carry?",
        a: "The category may list shatter, wax, budder, live resin, rosin, hash, kief, and other formats. Check the current menu.",
      },
      {
        q: "Where can I check concentrate formats?",
        a: "Review each current menu listing and its package details, or ask staff when a format detail matters.",
      },
    ],
  },
  PREROLLS: {
    banner: "/banners/04_Pre_Rolls.webp",
    name: "Pre-Rolls",
    slug: "prerolls",
    color: "#22c55e",
    icon: "🚬",
    seoTitle: "Pre-Rolls Toronto Ready-to-Smoke Cannabis Joints",
    seoIntro:
      "Pre-rolled cannabis joints at Green Pentagon Cannabis, Toronto. Singles, multi-packs, and infused pre-rolls ready to light up.",
    seoDescription:
      "Browse singles, multi-packs, and other pre-roll formats on the Green Pentagon Cannabis menu. Visit us at 1267 Queen St W during posted store hours.",
    faqs: [
      {
        q: "What pre-rolls do you carry?",
        a: "The menu may list singles, three-packs, multi-packs, and other pre-roll formats. Check current details.",
      },
      {
        q: "Where can I review pre-roll details?",
        a: "Review the product listing and package information, or ask staff when a detail matters.",
      },
    ],
  },
  "ADD ONS": {
    banner: "/banners/05_Accessories.webp",
    name: "Accessories",
    slug: "add-ons",
    color: "#34d399",
    icon: "➕",
    seoTitle: "Cannabis Accessories Toronto Grinders, Papers, Lighters & More",
    seoIntro:
      "Essential cannabis accessories at Green Pentagon Cannabis, Toronto. Grinders, rolling papers, lighters, trays, and more.",
    seoDescription:
      "Browse the accessories category for menu listings such as grinders, rolling papers, lighters, trays, and storage containers. Visit us at 1267 Queen St W, Toronto.",
    faqs: [
      {
        q: "What accessories do you sell?",
        a: "We carry grinders, rolling papers, filter tips, lighters, rolling trays, storage jars, and more.",
      },
    ],
  },
  "MAGIC & OTHERS": {
    name: "Magic Stuff",
    slug: "magic",
    color: "#64748b",
    icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro:
      "Browse the current menu for specialty category listings.",
    seoDescription:
      "Current specialty category items appear on the menu with their public listing details. Confirm an exact item with staff when needed.",
    faqs: [
      {
        q: "Where can I browse specialty items?",
        a: "Check the current specialty category page for public menu listings.",
      },
      {
        q: "Can specialty menu details change?",
        a: "Yes. Check the current menu and ask staff when one exact item matters.",
      },
    ],
  },
  CIGARETTES: {
    banner: "/banners/06_Cigarettes.webp",
    name: "Cigarettes",
    slug: "cigarettes",
    color: "#78716c",
    icon: "*",
    seoTitle:
      "Native Cigarettes Toronto Discount Tobacco at Green Pentagon Cannabis",
    seoIntro:
      "Discount native cigarettes at Green Pentagon Cannabis, Toronto. Cigarette category options at the competitive prices on Queen St W.",
    seoDescription:
      "Browse the cigarette category at Green Pentagon Cannabis in Toronto for current brand and package details. The store is at 1267 Queen St W and is open during posted hours.",
    faqs: [
      {
        q: "Do you sell cigarettes at Green Pentagon Cannabis?",
        a: "Yes! We carry a wide selection of native cigarette brands at competitive prices.",
      },
      {
        q: "What cigarette brands do you carry?",
        a: "Review the current cigarette category and ask staff when a particular brand or package style matters.",
      },
      {
        q: "Where can I confirm cigarette prices?",
        a: "Use the current cigarette category or ask staff to confirm a posted package price.",
      },
    ],
  },
};

/* Helper functions */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter((f) => f.tier.toUpperCase() === tier.toUpperCase());
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase(),
  );
}

export function getTierFromSlug(
  slug: string,
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(([, v]) => v.slug === slug);
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string,
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug,
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [
    flower.price3g,
    flower.price5g,
    flower.price14g,
    flower.price28g,
  ]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
