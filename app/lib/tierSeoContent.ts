export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

function tierContent(label: string, path: string): TierSeoData {
  return {
    seoTitle: `${label} Cannabis Flower Toronto | Green Pentagon Cannabis`,
    seoIntro: `Browse the ${label} flower tier at Green Pentagon Cannabis on Queen Street West. Compare the current menu, posted weights, and prices before visiting.`,
    sections: [
      { heading: `Browse The ${label} Tier`, body: `The ${label} page keeps this flower lane separate so shoppers can compare its current public menu without mixing it with other tiers.` },
      { heading: "Compare Current Menu Details", body: "Review product names, weights, and posted prices on the current tier page. Ask staff when an item detail matters." },
      { heading: "Continue Through The Flower Menu", body: `Use ${path} for this tier, or move between Exotic, Premium, AAA+, AA, and Budget using the flower navigation.` },
    ],
    faqs: [
      { q: `Where can I browse the ${label} tier?`, a: `Open ${path} to review the current public menu for this flower tier.` },
      { q: "Can menu details change?", a: "Yes. Confirm current product names, weights, and posted prices on the menu or with staff." },
    ],
  };
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: tierContent("Exotic", "/exotic"),
  PREMIUM: tierContent("Premium", "/premium"),
  "AAA+": tierContent("AAA+", "/aaa"),
  AA: tierContent("AA", "/aa"),
  BUDGET: tierContent("Budget", "/budget"),
};
