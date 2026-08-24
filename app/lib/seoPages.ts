const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: typeof NATIVE_HERO_PRODUCTS;
    disclosure: typeof NATIVE_HERO_DISCLOSURE;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const visitFaqs = [
  { q: "Where is Green Pentagon Cannabis?", a: "Green Pentagon Cannabis is at 1267 Queen St W, Toronto, ON M6K 2J2." },
  { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
];

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "queen-west-weed-dispensary",
    title: "Queen West Weed Dispensary | Green Pentagon Cannabis",
    metaDescription: "Plan a visit to Green Pentagon Cannabis on Queen Street West and browse its current flower tiers and menu categories.",
    h1: "Queen West Weed Dispensary",
    icon: "*",
    heroTagline: "A Queen Street West menu and visit guide",
    sections: [
      { heading: "Plan A Queen West Stop", body: "Green Pentagon Cannabis is located at 1267 Queen St W near Parkdale. Review the store's current category pages before visiting." },
      { heading: "Browse By Menu Lane", body: "Start with flower tiers or open the dedicated pages for pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "cheap-weed-queen-west",
    title: "Value Weed Queen West | Green Pentagon Cannabis",
    metaDescription: "Compare Green Pentagon Cannabis flower tiers and posted menu prices before a Queen West visit.",
    h1: "Value Weed Near Queen West",
    icon: "$",
    heroTagline: "Compare posted flower tiers and menu prices",
    sections: [
      { heading: "Compare The Flower Tiers", body: "The Exotic, Premium, AAA+, AA, and Budget pages organize flower into separate menu lanes with posted weights and prices." },
      { heading: "Confirm Current Details", body: "Product names and menu details can change. Use the current tier page or ask staff when one exact item matters." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "native-cigarettes-queen-west",
    title: "Native Cigarettes Queen West | Green Pentagon Cannabis",
    metaDescription: "Browse the cigarette category at Green Pentagon Cannabis on Queen Street West and confirm current brand and package details.",
    h1: "Native Cigarettes Near Queen West",
    icon: "*",
    heroTagline: "Cigarette category and visit information",
    heroPreview: {
      eyebrow: "Green Pentagon Cannabis · 1267 Queen St W, Queen West",
      intro: "Cigarette category and visit information",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    sections: [
      { heading: "Browse The Cigarette Category", body: "Use the cigarette menu page to review the current public list before visiting Green Pentagon Cannabis." },
      { heading: "Confirm Brand Details", body: "Ask staff when a particular brand, package style, or price matters for your visit." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "weed-store-near-queen-west",
    title: "Weed Store Near Queen West | Green Pentagon Cannabis",
    metaDescription: "Find Green Pentagon Cannabis at 1267 Queen Street West and browse current store menu categories.",
    h1: "Weed Store Near Queen West",
    icon: "*",
    heroTagline: "Local store information for a Queen West visit",
    sections: [
      { heading: "Queen Street West Location", body: "Green Pentagon Cannabis is at 1267 Queen St W, Toronto, ON M6K 2J2, near Parkdale and the Queen streetcar corridor." },
      { heading: "Choose A Category First", body: "Use the menu categories to narrow the visit to flower, pre-rolls, edibles, vapes, concentrates, accessories, or cigarettes." },
    ],
    faqs: visitFaqs,
  },
  {
    slug: "dispensary-near-me-queen-west",
    title: "Dispensary Near Me Queen West | Green Pentagon Cannabis",
    metaDescription: "Green Pentagon Cannabis store information and current menu navigation for adults planning a Queen West visit.",
    h1: "Dispensary Near Me In Queen West",
    icon: "*",
    heroTagline: "Store details and current menu navigation",
    sections: [
      { heading: "Start With Store Details", body: "Check the address and posted store hours, then use the menu to plan which category you want to compare." },
      { heading: "Use Current Menu Pages", body: "Category and tier pages provide the public menu structure. Confirm an exact item through the current menu or with staff." },
    ],
    faqs: visitFaqs,
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
