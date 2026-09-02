const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export const NICOTINE_VAPES_QUEEN_WEST_PRODUCTS = [
  {
    slug: "geek-max-5-20k30k-puffs-many-flavors",
    name: "GEEK MAX – 5% | 20K–30K PUFFS | MANY FLAVORS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEKMAX500x500HQ.webp",
  },
  {
    slug: "ovns-10000-5-10k-puffs",
    name: "OVNS 10000 – 5% | 10K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg",
  },
  {
    slug: "ovns-disposable-5-8ml-many-flavors",
    name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp",
  },
] as const;

interface HeroPreviewProduct {
  slug?: string;
  name: string;
  image: string;
}

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
    products: readonly HeroPreviewProduct[];
    disclosure: string;
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    stageLabel?: string;
    warning?: string;
  };
  banner?: string;
  showTierGrid?: boolean;
  showVisitSection?: boolean;
  relatedLink?: { href: string; label: string; intro: string };
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const visitFaqs = [
  { q: "Where is Green Pentagon Cannabis?", a: "Green Pentagon Cannabis is at 1267 Queen St W, Toronto, ON M6K 2J2." },
  { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
];

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "nicotine-vapes-queen-west",
    title: "Nicotine Vapes Queen West | Green Pentagon Cannabis",
    metaDescription: "Adults 19+: review three live-checked nicotine vape product pages from Green Pentagon Cannabis near Queen West and Parkdale. Nicotine is addictive.",
    h1: "Nicotine Vapes Near Queen West",
    icon: "",
    heroTagline: "",
    heroPreview: {
      eyebrow: "GREEN PENTAGON CANNABIS • QUEEN STREET WEST • QUEEN WEST / PARKDALE • ADULTS 19+",
      intro: "This Green Pentagon Cannabis guide highlights three live-checked nicotine vape product pages for adults near Queen West and Parkdale in Toronto. Use the nicotine vape category for product information. These cards are a limited evidence set, not a complete selection. Nicotine is addictive.",
      products: NICOTINE_VAPES_QUEEN_WEST_PRODUCTS,
      disclosure: "Three live-checked product pages only. The cards are not a complete selection or a claim about current stock, price, or availability.",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Review the Nicotine Vape Category",
      stageLabel: "Three live-checked Green Pentagon Cannabis nicotine vape product pages",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      {
        heading: "Three Live-Checked Nicotine Vape Pages",
        body: "The verified Green Pentagon Cannabis set includes one Geek Max page and two OVNS pages. Use each card for its supported name and image, then use the nicotine vape category for product information. These three cards do not describe a complete selection.",
      },
      {
        heading: "Read Each Product Name Carefully",
        body: "The verified names include puff-count and format details that belong only to their respective product pages. Keep those details attached to the correct card and do not extend them to another product by assumption.",
      },
      {
        heading: "Queen West and Parkdale Context",
        body: "This Green Pentagon Cannabis guide uses the store's verified Queen Street West, Queen West, Parkdale and Toronto context. It does not make a claim about current stock, price, availability, hours or service area.",
      },
      {
        heading: "Keep Nicotine and Cannabis Vapes Separate",
        body: "This page is limited to live-checked nicotine products from the VAPE PENS category. THC and cannabis vape products are excluded from this guide.",
      },
    ],
    faqs: [
      {
        q: "Where should I review Green Pentagon Cannabis nicotine vape information?",
        a: "Use the nicotine vape category. The three featured cards are live-checked product pages, but they are not a complete selection or a claim about stock, price or availability.",
      },
      {
        q: "Do the three cards represent every nicotine vape product?",
        a: "No. They are three live-checked product pages with supported names and images. They should not be read as a complete selection.",
      },
      {
        q: "Does this Green Pentagon Cannabis guide include THC vapes?",
        a: "No. This adult-only page is limited to the verified nicotine vape cards. THC and cannabis vape products are excluded.",
      },
    ],
    showTierGrid: false,
    showVisitSection: false,
    relatedLink: {
      href: "/info/native-cigarettes-queen-west",
      label: "Read the Green Pentagon Cannabis Native Cigarettes guide",
      intro: "For the separate cigarette category, use the exact Queen West guide:",
    },
  },
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
      { heading: "Compare The Weed Flower Collections", body: "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed organize flower into separate menu collections." },
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
