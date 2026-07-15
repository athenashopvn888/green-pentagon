export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

const hubCards: ResourceCard[] = [
  {
    title: "Queen West Visit Guide",
    href: "/resources/queen-west-visit-guide",
    text: "Plan the stop around Parkdale, Queen St W, Lansdowne, Dufferin, Liberty Village, and Roncesvalles.",
  },
  {
    title: "Menu Guide",
    href: "/resources/menu-guide",
    text: "A street-level path for flower, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes.",
  },
  {
    title: "Flower Tier Guide",
    href: "/resources/flower-guide",
    text: "Compare Exotic, Premium, AAA+, AA, and Budget with the 3g and 6g tier math.",
  },
  {
    title: "Value Guide",
    href: "/resources/value-guide",
    text: "Quick help for budget weed and affordable flower near Parkdale and Queen West.",
  },
  {
    title: "Native Smokes Prices",
    href: "/resources/native-smokes",
    text: "Actual brand and price notes for cigarettes, Backwoods, grabba, and mixed smoke items.",
  },
];

const menuCards: ResourceCard[] = [
  {
    title: "Flower Tiers",
    href: "/resources/flower-guide",
    text: "Use tier pricing and bundle math before choosing a flower shelf.",
  },
  {
    title: "Pre-Roll Guide",
    href: "/resources/pre-roll-guide",
    text: "A faster lane for ready-to-smoke category browsing.",
  },
  {
    title: "Cigarette Category",
    href: "/items/cigarettes",
    text: "Open the cigarette shelf for current brand and price listings.",
  },
  {
    title: "Store Visit Page",
    href: "/weed-dispensary-toronto",
    text: "Use the visit guide for the Queen St W address and store details.",
  },
];

const flowerCards: ResourceCard[] = [
  {
    title: "Exotic Flower",
    href: "/exotic",
    text: "$20/g, 3g for $40, or 6g for $60 where the menu tier deal is listed.",
  },
  {
    title: "Premium Flower",
    href: "/premium",
    text: "$15/g, 3g for $30, or 6g for $45 where the menu tier deal is listed.",
  },
  {
    title: "AAA+ Flower",
    href: "/aaa",
    text: "$10/g, 3g for $20, or 6g for $30 where the menu tier deal is listed.",
  },
  {
    title: "AA Flower",
    href: "/aa",
    text: "$4/g for a clean value shelf.",
  },
  {
    title: "Budget Flower",
    href: "/budget",
    text: "$3/g for the lowest posted flower tier lane.",
  },
];

const cigaretteCards: ResourceCard[] = [
  {
    title: "$25 Cigarettes",
    href: "/items/cigarettes",
    text: "Canadian, Putters, Canadian Goose, Canadian Classics, Nexus, Rolled Gold, and Menthol listings.",
  },
  {
    title: "Backwoods",
    href: "/items/cigarettes",
    text: "New Backwoods Flavors are listed at $25, with Backwoods Assorted Flavors listed $20-$25.",
  },
  {
    title: "Grabba",
    href: "/items/cigarettes",
    text: "Grabba is listed at $5, Grabba RedRose / RedHerring at $5, and Grabba Shaker at $19.",
  },
  {
    title: "Premium Mix",
    href: "/items/cigarettes",
    text: "10 x Premium Mix Cigarettes are listed at $3.",
  },
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Green Pentagon Cannabis Resources",
    seoTitle: "Green Pentagon Cannabis Resources | Queen West and Parkdale Menu Guides",
    description:
      "Green Pentagon Cannabis resource pages for Parkdale and Queen West shoppers, with visit planning, menu shortcuts, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "Queen West Resource Hub",
    intro:
      "Green Pentagon Cannabis resources should feel like a Queen St W shortcut, not a copied cannabis blog. These pages are built for Parkdale, Queen West, Lansdowne, Dufferin, Liberty Village, Roncesvalles, and TTC shoppers who want the right next click before heading to 1267 Queen St W.",
    cards: hubCards,
    sections: [
      {
        heading: "Built For The Queen West Stop",
        body:
          "The resource hub gathers local planning information for Green Pentagon Cannabis at 1267 Queen St W, Toronto, ON M6K 2J2. Start with the store page, then use the resources to choose a menu category.",
        bullets: [
          "Use /weed-dispensary-toronto for the local store page.",
          "Use /resources/menu-guide when choosing between cannabis categories.",
          "Use /resources/native-smokes when cigarette brands, Backwoods, or grabba are part of the visit.",
        ],
      },
      {
        heading: "Parkdale And Queen West Visit Planning",
        body:
          "Use this hub to plan a Green Pentagon Cannabis visit from Parkdale, Queen West, Lansdowne, Dufferin, Liberty Village, Roncesvalles, or the Queen streetcar corridor.",
      },
    ],
  },
  {
    slug: "queen-west-visit-guide",
    title: "Queen West Weed Dispensary Visit Guide",
    seoTitle: "Queen West Weed Dispensary Visit Guide | Green Pentagon Cannabis",
    description:
      "A local visit guide for Green Pentagon Cannabis at 1267 Queen St W, with Parkdale, Lansdowne, Dufferin, Liberty Village, Roncesvalles, and TTC shopping paths.",
    eyebrow: "Visit Guide",
    intro:
      "Use this page to plan a menu stop from Queen West, Parkdale, Lansdowne, Dufferin, Liberty Village, Roncesvalles, or the Queen streetcar corridor.",
    cards: [
      {
        title: "Plan Your Visit",
        href: "/weed-dispensary-toronto",
        text: "The store-connected page with address, hours, and visit context.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Choose the right product category before opening deep menu pages.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A direct guide to Budget, AA, and other flower tiers.",
      },
    ],
    sections: [
      {
        heading: "Address Anchor",
        body:
          "Green Pentagon Cannabis is listed at 1267 Queen St W, Toronto, ON M6K 2J2. Use that address for visit planning, then use the category pages to choose flower, pre-rolls, edibles, vapes, concentrates, accessories, or cigarettes.",
      },
      {
        heading: "Queen Street Movement",
        body:
          "Queen West shoppers often move by neighborhood instead of exact postal code. That is why this guide connects Parkdale, Lansdowne, Dufferin, Liberty Village, Roncesvalles, TTC, and Queen St W language to the same clean store path.",
        bullets: [
          "Parkdale and Queen West for nearby visit planning.",
          "Lansdowne and Dufferin for direction-based planning.",
          "Liberty Village, Roncesvalles, and TTC for nearby shopper movement.",
        ],
      },
      {
        heading: "Hours For The Stop",
        body:
          "The listed hours are Open Daily: 10:00 AM - 12:00 AM. Use the current store page for visit details and the menu resources for product decisions.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title: "Green Pentagon Cannabis Menu Guide",
    seoTitle: "Green Pentagon Cannabis Menu Guide | Queen West Flower, Vapes, Edibles",
    description:
      "A Queen West menu guide for Green Pentagon Cannabis shoppers comparing flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes.",
    eyebrow: "Menu Guide",
    intro:
      "The Green Pentagon menu works best when shoppers choose a lane before comparing products. Flower has shelf tiers. Pre-rolls have format decisions. Cigarettes have brand and price details. Edibles, vapes, concentrates, and accessories are easier to compare one category at a time.",
    cards: menuCards,
    sections: [
      {
        heading: "Do Not Shop Every Category At Once",
        body:
          "A Queen West quick stop can get messy if every product type is compared together. Pick one category, compare the details that matter there, then move to the next shelf only if the trip changes.",
        bullets: [
          "Flower shoppers should start with tier and bundle math.",
          "Pre-roll shoppers should compare format, size, and posted notes.",
          "Cigarette shoppers should compare brand, style, and price first.",
        ],
      },
      {
        heading: "Protect The Local Page",
        body:
          "The visit guide stays as the main local store guide. The resource pages help by grouping shopper questions around menu choices, Parkdale context, Queen West intent, and useful category links.",
      },
    ],
  },
  {
    slug: "flower-guide",
    title: "Green Pentagon Flower Tier and 6g Price Guide",
    seoTitle: "Green Pentagon Flower Tier Guide | 6g Bundle Prices and Budget Weed",
    description:
      "Compare Green Pentagon Cannabis flower tiers with posted per-gram prices and 6g bundle math for Exotic, Premium, AAA+, AA, and Budget flower.",
    eyebrow: "Flower Tiers",
    intro:
      "Here is the posted flower math: Exotic is shown at $20/g with 6g for $60, Premium at $15/g with 6g for $45, AAA+ at $10/g with 6g for $30, AA at $4/g, and Budget at $3/g. Use the current tier pages for product details.",
    cards: flowerCards,
    sections: [
      {
        heading: "Read The 6g Deal Before Judging The Shelf",
        body:
          "The top three tiers have bundle math that can matter more than the straight per-gram label. Exotic can show 6g for $60, Premium can show 6g for $45, and AAA+ can show 6g for $30.",
        bullets: [
          "Exotic: $20/g, 3g for $40, 6g for $60.",
          "Premium: $15/g, 3g for $30, 6g for $45.",
          "AAA+: $10/g, 3g for $20, 6g for $30.",
        ],
      },
      {
        heading: "AA And Budget For Straight Value",
        body:
          "AA at $4/g and Budget at $3/g are the simplest value paths. They make sense for shoppers looking for cheap weed or affordable weed near Parkdale or Queen West without needing the higher shelf first.",
      },
      {
        heading: "Final Check On The Tier Page",
        body:
          "The guide explains the pricing structure. Use the current tier page or ask at the counter for listed product names, prices, and item notes.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "Green Pentagon Value Weed Guide",
    seoTitle: "Green Pentagon Value Weed Guide | Cheap Weed Near Parkdale",
    description:
      "A value shopping guide for Green Pentagon Cannabis near Parkdale and Queen West, covering Budget, AA, AAA+, 6g deals, and affordable weed menu choices.",
    eyebrow: "Value Guide",
    intro:
      "For value shopping near Parkdale and Queen West, start with the shelves that were built for it: Budget, AA, and sometimes AAA+ when the 6g bundle makes sense.",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget",
        text: "$3/g for the lowest posted flower lane.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "$4/g for a simple low-spend lane.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa",
        text: "$10/g, 3g for $20, or 6g for $30 where listed.",
      },
      {
        title: "Flower Tier Guide",
        href: "/resources/flower-guide",
        text: "Use this when bundle math matters.",
      },
    ],
    sections: [
      {
        heading: "Budget First, Upgrade If It Makes Sense",
        body:
          "For value-focused menu planning near Queen West, start with Budget and AA. To compare another tier, check AAA+ and its posted bundle details.",
      },
      {
        heading: "Use Category Value, Not Random Value",
        body:
          "Compare each format on its own: flower, pre-rolls, edibles, vapes, concentrates, and cigarettes all shop a little differently.",
      },
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "Green Pentagon Pre-Roll and Street Stop Guide",
    seoTitle: "Green Pentagon Pre-Roll Guide | Queen West Cannabis Menu Tips",
    description:
      "A Queen West pre-roll guide for Green Pentagon Cannabis shoppers who want ready-to-smoke options, quick category paths, and menu shortcuts.",
    eyebrow: "Pre-Roll Guide",
    intro:
      "Pre-rolls are the quick-stop lane. If the Queen West visit is about ready-to-smoke options, use the pre-roll category first instead of comparing every flower shelf.",
    cards: [
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Open the current pre-roll category.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this if the trip includes edibles, vapes, concentrates, or accessories.",
      },
      {
        title: "Visit Guide",
        href: "/resources/queen-west-visit-guide",
        text: "Plan the Parkdale and Queen West stop.",
      },
    ],
    sections: [
      {
        heading: "Ready-To-Smoke Has Its Own Logic",
        body:
          "Compare pre-rolls by format, package size, posted notes, and current price. Do not force loose-flower tier logic onto a pre-roll decision unless you are actually switching categories.",
      },
      {
        heading: "Good For Mixed Queen West Trips",
        body:
          "If the stop also includes edibles, THC vapes, concentrates, accessories, or cigarettes, handle pre-rolls as one clean lane and then move to the next category.",
      },
    ],
  },
  {
    slug: "native-smokes",
    title: "Green Pentagon Native Smokes Price Guide",
    seoTitle: "Green Pentagon Native Smokes Prices | Cigarettes, Backwoods, Grabba",
    description:
      "Green Pentagon Cannabis Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Canadian Menthol, Nexus, Rolled Gold, Backwoods, and grabba.",
    eyebrow: "Native Smokes",
    intro:
      "This page gives cigarette shoppers the detail they actually need: brand names, full/light/menthol notes, and price points for the Green Pentagon cigarette category.",
    cards: cigaretteCards,
    sections: [
      {
        heading: "$25 Cigarette Brand List",
        body:
          "The cigarette menu lists New Backwoods Flavors, Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Nexus Full, Nexus Lights, and Rolled Gold Lights at $25.",
        bullets: [
          "New Backwoods Flavors - $25",
          "Canadian Lights - $25",
          "Canadian Full - $25",
          "Putters - $25",
          "Canadian Goose Full - $25",
          "Canadian Goose Lights - $25",
          "Canadian Menthol - $25",
          "Canadian Classics Original - $25",
          "Canadian Classics Silver - $25",
          "Nexus Full - $25",
          "Nexus Lights - $25",
          "Rolled Gold Lights - $25",
        ],
      },
      {
        heading: "Backwoods, Grabba, And Mix Items",
        body:
          "The menu also lists Backwoods Assorted Flavors at $20-$25, Grabba at $5, Grabba RedRose / RedHerring at $5, Grabba Shaker RedRose / Red Herring at $19, and 10 x Premium Mix Cigarettes at $3.",
      },
      {
        heading: "Use The Category Before Heading Out",
        body:
          "Use the current cigarette category for listed brands and styles, then confirm in store when one exact brand, flavor, or light/full/menthol style matters.",
      },
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "Green Pentagon Native Cigarettes Brand Guide",
    seoTitle: "Green Pentagon Native Cigarettes Guide | $25 Brand List",
    description:
      "A detailed Native cigarettes brand guide for Green Pentagon Cannabis, including $25 cigarette listings plus Backwoods, grabba, and mix item prices.",
    eyebrow: "Native Cigarettes",
    intro:
      "If cigarettes are part of the Queen West stop, this page gives a fuller brand and price breakdown so shoppers are not stuck guessing from a generic resource page.",
    cards: [
      {
        title: "Cigarette Category",
        href: "/items/cigarettes",
        text: "Open the current cigarette category.",
      },
      {
        title: "Native Smokes Overview",
        href: "/resources/native-smokes",
        text: "Return to the shorter price guide.",
      },
      {
        title: "Queen West Visit Guide",
        href: "/resources/queen-west-visit-guide",
        text: "Plan the local store stop.",
      },
    ],
    sections: [
      {
        heading: "Brand Names To Check",
        body:
          "Green Pentagon listings include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Nexus Full, Nexus Lights, and Rolled Gold Lights at $25.",
      },
      {
        heading: "Backwoods And Grabba",
        body:
          "Backwoods Assorted Flavors are listed at $20-$25, New Backwoods Flavors at $25, Grabba at $5, Grabba RedRose / RedHerring at $5, Grabba Shaker RedRose / Red Herring at $19, and 10 x Premium Mix Cigarettes at $3.",
      },
      {
        heading: "Separate The Smoke Shelf From Cannabis Shopping",
        body:
          "When the visit includes flower, pre-rolls, edibles, THC vapes, or concentrates, keep cigarettes as their own shelf. That makes the category easier for both cigarette shoppers and cannabis shoppers.",
      },
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "Green Pentagon Resource Guide Update",
    seoTitle: "Green Pentagon Resource Guide Update | Queen West Menu Guides",
    description:
      "Green Pentagon Cannabis resource guide update with Queen West and Parkdale visit planning, menu guide pages, flower tier pricing, value shopping, and Native smokes prices.",
    eyebrow: "Resource Update",
    intro:
      "The resource section is organized around Green Pentagon Cannabis shoppers: Queen West visit planning, category-by-category browsing, flower tier math, value shopping, pre-roll shortcuts, and cigarette price notes.",
    cards: hubCards,
    sections: [
      {
        heading: "What Changed",
        body:
          "The resources are written for Green Pentagon Cannabis in Parkdale and Queen West, Each page helps with a specific shopping task and points back to the matching menu category or visit guide.",
      },
      {
        heading: "What Stayed Protected",
        body:
          "Continue through the store and resource guides for menu, flower tiers, value planning, pre-rolls, native smokes, and cigarette details.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
