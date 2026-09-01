export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | Green Pentagon Cannabis",
    seoIntro: "Green Pentagon Cannabis gives Exotic its own dedicated flower page within the site's existing tier structure. This page stays focused on Exotic weed and cannabis flower while the broader Weed topic remains with the Queen Street West Weed Dispensary page.",
    sections: [
      { heading: "Explore the Exotic Flower Tier", body: "Exotic is separated from Premium, AAA+, AA and Budget so this tier has a clear role of its own. The page is intended for focused category browsing rather than broad store-level Weed intent." },
      { heading: "Exotic Within Green Pentagon's Flower Structure", body: "Green Pentagon organizes its flower tiers as distinct destinations instead of treating every tier as the same page. Exotic remains one part of that broader cannabis flower structure." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Green Pentagon Cannabis?", a: "Exotic is one of Green Pentagon Cannabis's dedicated cannabis flower tiers." },
      { q: "Is this the main Green Pentagon Weed page?", a: "No. This page is specific to the Exotic tier, while the broader Weed Dispensary page remains the main Weed destination." },
      { q: "Which other flower tiers have their own pages?", a: "Green Pentagon also separates Premium, AAA+, AA and Budget into dedicated tier pages." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | Green Pentagon Cannabis",
    seoIntro: "The Premium page gives Green Pentagon Cannabis a dedicated place for Premium weed and cannabis flower. It remains narrower than the site's broad Weed owner and serves only the Premium tier within the larger flower architecture.",
    sections: [
      { heading: "Browse the Premium Flower Tier", body: "Premium is kept separate from Exotic, AAA+, AA and Budget so the category has a defined place in the Green Pentagon site structure." },
      { heading: "How Premium Fits the Green Pentagon Tier System", body: "The site uses separate flower-tier pages to keep category intent clear. Premium is one of those narrow destinations, while broader Weed discovery remains elsewhere." },
    ],
    faqs: [
      { q: "What is the Premium tier at Green Pentagon Cannabis?", a: "Premium is one of Green Pentagon Cannabis's dedicated cannabis flower tiers." },
      { q: "Does the Premium page replace the broad Weed page?", a: "No. It serves tier-specific intent only." },
      { q: "What other flower tiers can be explored separately?", a: "Exotic, AAA+, AA and Budget each have their own tier pages." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | Green Pentagon Cannabis",
    seoIntro: "Green Pentagon Cannabis uses a dedicated AAA+ page so this flower tier can stand on its own within the site's broader Weed and cannabis structure. The page stays specific to AAA+ rather than competing with the broad Weed owner.",
    sections: [
      { heading: "Explore the AAA+ Flower Category", body: "AAA+ is organized as a distinct tier alongside Exotic, Premium, AA and Budget. Keeping it separate helps maintain a clear role for each flower category." },
      { heading: "AAA+ in Green Pentagon's Tier Architecture", body: "The AAA+ page is a narrow category destination within the Green Pentagon site. General Weed intent continues to belong to the broader Weed Dispensary page." },
    ],
    faqs: [
      { q: "What does AAA+ mean on the Green Pentagon site?", a: "AAA+ is the name of one of Green Pentagon Cannabis's dedicated flower tiers." },
      { q: "Why does AAA+ have its own page?", a: "The separate page keeps AAA+-specific browsing distinct from the other flower tiers." },
      { q: "Which other flower tiers are separated on the site?", a: "Green Pentagon also has dedicated Exotic, Premium, AA and Budget tier pages." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | Green Pentagon Cannabis",
    seoIntro: "The AA page gives Green Pentagon Cannabis a focused destination for the AA cannabis flower tier. It remains intentionally narrow so the broader Weed Dispensary page can continue to handle general Weed intent.",
    sections: [
      { heading: "Explore the AA Flower Tier", body: "AA is treated as its own category within the Green Pentagon flower structure rather than being combined with every other tier." },
      { heading: "AA as Part of the Green Pentagon Flower System", body: "AA sits alongside Exotic, Premium, AAA+ and Budget as one of the site's distinct tier pages. Each tier keeps its own category role." },
    ],
    faqs: [
      { q: "What is the AA tier at Green Pentagon Cannabis?", a: "AA is one of Green Pentagon Cannabis's dedicated cannabis flower tiers." },
      { q: "Is the AA page the main Weed page?", a: "No. It is a narrow tier page, while the broader Weed Dispensary page remains the main Weed owner." },
      { q: "What other flower tiers have separate pages?", a: "Exotic, Premium, AAA+ and Budget also have dedicated pages." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | Green Pentagon Cannabis",
    seoIntro: "Green Pentagon Cannabis uses Budget as a dedicated cannabis flower tier within its existing site structure. The page identifies the category only and does not make claims about current pricing, promotions, stock or availability.",
    sections: [
      { heading: "Explore the Budget Flower Tier", body: "Budget has its own place within the Green Pentagon flower structure, separate from Exotic, Premium, AAA+ and AA." },
      { heading: "Budget Within the Green Pentagon Tier System", body: "The Budget page serves a specific category role within the wider flower architecture. Broader Weed intent continues to belong to the site's protected Weed Dispensary page." },
    ],
    faqs: [
      { q: "What is the Budget tier at Green Pentagon Cannabis?", a: "Budget is the name of one of Green Pentagon Cannabis's dedicated cannabis flower tiers." },
      { q: "Does the Budget label confirm a current price or promotion?", a: "No. The tier name identifies the category and does not establish a current price, deal or promotion." },
      { q: "Which other flower tiers can be explored separately?", a: "Green Pentagon also has dedicated pages for Exotic, Premium, AAA+ and AA." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore the Exotic cannabis flower tier at Green Pentagon Cannabis on Queen Street West in Toronto, kept distinct from the site's broader Weed category.",
  PREMIUM: "Explore the Premium weed and cannabis flower tier at Green Pentagon Cannabis in Toronto within its established five-tier flower structure.",
  "AAA+": "Explore the AAA+ weed and cannabis flower tier at Green Pentagon Cannabis in Toronto as a dedicated part of its flower category structure.",
  AA: "Explore the AA weed and cannabis flower tier at Green Pentagon Cannabis in Toronto through its dedicated flower category page.",
  BUDGET: "Explore the Budget cannabis flower tier at Green Pentagon Cannabis in Toronto without implying current pricing, promotions or availability.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
