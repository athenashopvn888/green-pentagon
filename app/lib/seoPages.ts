const NATIVE_HERO_DISCLOSURE = "These carton names are a Queen West planning aid. Open the cigarette menu or ask at the Parkdale counter before you travel for one specific pack.";
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
  { q: "Where is Green Pentagon Cannabis?", a: "Green Pentagon Cannabis is at 1267 Queen St W, Toronto, ON M6K 2J2, on Queen West / Parkdale near Dufferin and Brock." },
  { q: "How can I review the menu?", a: "Use the flower collection and category pages to compare the current public menu before visiting. For street-level directions use /visit." },
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
    title: "Queen West Weed Dispensary | How to Reach Green Pentagon Cannabis",
    metaDescription: "How to reach Green Pentagon Cannabis at 1267 Queen St W: Parkdale / Queen West walk-in, 501 Queen streetcar, Dufferin and Brock stops, Green P notes, and 19+ ID. Open Daily: 10:00 AM - 12:00 AM.",
    h1: "Queen West Walk-In Dispensary at 1267 Queen St W",
    icon: "*",
    heroTagline: "How to reach Green Pentagon Cannabis on Queen West / Parkdale",
    showTierGrid: false,
    sections: [
      { heading: "The door is on Queen, not a city-wide SERP", body: "Green Pentagon Cannabis is the walk-in shop at 1267 Queen St W, Toronto, ON M6K 2J2. Own this stretch — Queen West, Parkdale Village, Queen & Dufferin, Brock — rather than a generic Toronto dispensary query. Call +1 (437) 290-3657. Adults 19+." },
      { heading: "Transit: 501 Queen, Dufferin, Brock", body: "Ride the 501 Queen streetcar along Queen Street West. Use the Dufferin stop from the east or Brock from western Parkdale. The 29 Dufferin bus and Dufferin Gate Loop (Exhibition Place) are south-side transfers, not the storefront. Check current TTC conditions. The /visit page is the full reach guide." },
      { heading: "Parking without blocking the streetcar", body: "Evening street parking on Queen West and nearby laterals (Close, Cowan, Dunn) is the usual pattern. Read posted signs. Green P around Queen & Dufferin is the backup when the curb is full. No dedicated private lot is claimed here." },
      { heading: "Landmarks on this stretch of Queen", body: "The Gladstone Hotel sits just east. Parkdale Village continues west toward Brock and Jameson. Drivers coming off the Gardiner typically use Jameson or Dufferin, then work north to Queen. CAMH further east on Queen is a wayfinding marker only." },
      { heading: "Browse categories, then confirm at the counter", body: "Flower collections and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes) are for planning. They are not a live inventory feed. If one exact item is the reason for the trip, call during listed hours: Open Daily: 10:00 AM - 12:00 AM." },
    ],
    faqs: [
      { q: "Where is the Queen West shop?", a: "1267 Queen St W, Toronto, ON M6K 2J2, just west of Queen and Dufferin toward Brock." },
      { q: "Is this a walk-in or a delivery page?", a: "This page is for the walk-in pin. Delivery is a separate neighbourhood-scoped URL. Directions: /visit." },
      { q: "What should I bring?", a: "Government-issued photo ID proving you are 19 or older. Debit and cash are the listed in-store payment methods." },
    ],
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
    metaDescription: "Adults 19+ can plan a cigarette stop at Green Pentagon Cannabis, 1267 Queen St W in Parkdale. Open daily 10:00 AM to 12:00 AM. Call +1 (437) 290-3657.",
    h1: "Native Cigarettes on Queen West",
    icon: "*",
    heroTagline: "Carton names for a Parkdale walk-in on Queen Street West",
    heroPreview: {
      eyebrow: "Green Pentagon Cannabis · 1267 Queen St W, Queen West",
      intro: "Parkdale shoppers comparing carton names before a walk-in at 1267 Queen St W can start here. Adults 19+.",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    sections: [
      { heading: "Cigarettes at the Parkdale door", body: "The counter is inside Green Pentagon Cannabis at 1267 Queen St W, Toronto, ON M6K 2J2, on Queen Street West between Dufferin and Brock. Phone +1 (437) 290-3657." },
      { heading: "Read the carton, then the menu", body: "The cards on this page show public names for a Queen West browse. If you need a light, full, or menthol style, open the cigarette category and confirm it before you leave for Parkdale." },
      { heading: "Hours, streetcar, and the door", body: "Open daily from 10:00 AM to 12:00 AM. The 501 Queen streetcar serves this stretch; Dufferin and Brock are the useful stops, and the visit page covers parking along Queen West." },
      { heading: "What the counter can confirm", body: "This Queen West page does not lock a price or promise a carton is on the shelf. Check the cigarette category or call during open hours when one brand is the whole reason for the Parkdale visit." },
    ],
    faqs: [
      { q: "Which corner of Parkdale is the shop on?", a: "1267 Queen St W, Toronto, ON M6K 2J2 — Queen West, just west of Dufferin toward Brock. Call +1 (437) 290-3657." },
      { q: "When can I walk in for cigarettes?", a: "Daily from 10:00 AM until 12:00 AM (midnight). Bring government-issued photo ID; shoppers must be 19 or older." },
      { q: "Do the carton photos mean that brand is on the shelf today?", a: "They do not. Use them to recognize a name, then confirm the posted price and whether it is listed on the cigarette menu or with staff at the Queen West counter." },
      { q: "Where are the 501 and parking notes?", a: "The visit page lists the 501 Queen streetcar, Dufferin and Brock stops, and Green P or street parking near 1267 Queen St W." },
    ],
  },
  {
    slug: "weed-store-near-queen-west",
    title: "Weed Store Near Queen West | Green Pentagon Cannabis",
    metaDescription: "Find Green Pentagon Cannabis at 1267 Queen Street West and browse current store menu categories.",
    h1: "Weed Store Near Queen West",
    icon: "*",
    heroTagline: "Local store information for a Queen West visit",
    sections: [
      { heading: "Queen Street West location", body: "Green Pentagon Cannabis is at 1267 Queen St W, Toronto, ON M6K 2J2, on the Queen West / Parkdale corridor near Dufferin and Brock. Adults 19+." },
      { heading: "How to actually get here", body: "Use /visit for the 501 Queen streetcar, Dufferin and Brock stops, Green P and street parking, Gardiner exits, and 19+ ID. Category pages help you plan a format; they do not reserve a jar." },
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
      { heading: "Start With Store Details", body: "Check 1267 Queen St W, Toronto, ON M6K 2J2 and posted hours (Open Daily: 10:00 AM - 12:00 AM), then use the menu to plan which category you want to compare. Adults 19+." },
      { heading: "Use Current Menu Pages", body: "Category and collection pages provide the public menu structure. Confirm an exact item through the current menu or with staff. Street-level directions live on /visit." },
    ],
    faqs: visitFaqs,
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
