export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed Queen West & Parkdale | Green Pentagon Cannabis",
    seoIntro: "Explore the Exotic Weed collection at Green Pentagon Cannabis on Queen West near Parkdale. This page keeps the tier focused while the local store guide and visit page cover the storefront and directions.",
    sections: [
      { heading: "Explore Exotic Weed at Green Pentagon Cannabis", body: "Exotic Weed gives shoppers a focused Cannabis Flower collection to explore at Green Pentagon Cannabis. Browse the products presented within this collection and use the information shown with individual items as you explore." },
      { heading: "Compare Exotic Weed with Other Flower Collections", body: "Green Pentagon Cannabis also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Exploring more than one collection gives shoppers different parts of the Cannabis Flower selection to consider without implying that one tier is inherently preferable." },
    ],
    faqs: [
      { q: "What is Exotic Weed at Green Pentagon Cannabis?", a: "Exotic Weed is one of Green Pentagon Cannabis's Cannabis Flower collections." },
      { q: "Can I compare Exotic Weed with other flower collections?", a: "Yes. You can also explore Premium Weed, AAA+ Weed, AA Weed and Budget Weed." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed Queen West & Parkdale | Green Pentagon Cannabis",
    seoIntro: "Browse the Premium Weed collection at Green Pentagon Cannabis on Queen West near Parkdale. Use the local store guide or visit page for storefront details and links to the wider flower lineup.",
    sections: [
      { heading: "Browse Premium Weed at Green Pentagon Cannabis", body: "Premium Weed brings together one part of the Green Pentagon Cannabis Flower selection. Shoppers can explore the products presented within the collection and review the information shown with individual items." },
      { heading: "Explore Premium Weed Alongside Other Collections", body: "Premium Weed can be explored alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed. Each collection gives shoppers another part of the Green Pentagon flower selection to browse." },
    ],
    faqs: [
      { q: "What can I explore in Premium Weed?", a: "Premium Weed contains the Cannabis Flower products presented within Green Pentagon Cannabis's Premium collection." },
      { q: "What other flower collections can I browse?", a: "You can also explore Exotic Weed, AAA+ Weed, AA Weed and Budget Weed." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed Queen West & Parkdale | Green Pentagon Cannabis",
    seoIntro: "Browse the AAA+ Weed collection at Green Pentagon Cannabis on Queen West near Parkdale. This page is dedicated to the tier while the local guide covers the store and visit information.",
    sections: [
      { heading: "Explore AAA+ Weed at Green Pentagon Cannabis", body: "AAA+ Weed brings together a distinct part of the Green Pentagon Cannabis Flower selection. Explore the products presented within the collection and review the information shown with individual items." },
      { heading: "Compare AAA+ Weed with Other Green Pentagon Collections", body: "AAA+ Weed can be explored alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Moving between collections gives shoppers more of the Green Pentagon flower selection to consider." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Green Pentagon Cannabis?", a: "AAA+ Weed is one of Green Pentagon Cannabis's Cannabis Flower collections." },
      { q: "Can I compare AAA+ Weed with other flower collections?", a: "Yes. You can also explore Exotic Weed, Premium Weed, AA Weed and Budget Weed." },
    ],
  },
  AA: {
    seoTitle: "AA Weed Queen West & Parkdale | Green Pentagon Cannabis",
    seoIntro: "Explore the AA Weed collection at Green Pentagon Cannabis on Queen West near Parkdale. Use this page for the tier and the visit guide for directions, hours and storefront details.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "Green Pentagon Cannabis presents AA Weed as one part of its broader Cannabis Flower selection. Shoppers can explore the products shown within this collection and continue comparing other flower selections as they browse." },
      { heading: "Compare AA Weed with Other Flower Collections", body: "AA Weed can be explored alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. The collections give shoppers several ways to explore Green Pentagon Cannabis Flower without treating one tier as automatically preferable." },
    ],
    faqs: [
      { q: "What is AA Weed at Green Pentagon Cannabis?", a: "AA Weed is one of Green Pentagon Cannabis's Cannabis Flower collections." },
      { q: "What other flower collections can I compare with AA Weed?", a: "You can also explore Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed Queen West & Parkdale | Green Pentagon Cannabis",
    seoIntro: "Explore the Budget Weed collection at Green Pentagon Cannabis on Queen West near Parkdale. The label identifies this store tier without promising a promotion, price or availability.",
    sections: [
      { heading: "Explore Budget Weed at Green Pentagon Cannabis", body: "Budget Weed brings together a focused part of the Green Pentagon Cannabis Flower selection. Explore the products presented within the collection and use the information shown with individual items as you browse." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "Green Pentagon Cannabis also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore more than one collection and compare the sections that interest them." },
    ],
    faqs: [
      { q: "What is Budget Weed at Green Pentagon Cannabis?", a: "Budget Weed is one of Green Pentagon Cannabis's Cannabis Flower collections." },
      { q: "Can I compare Budget Weed with other Green Pentagon flower collections?", a: "Yes. Budget Weed can be explored alongside AA Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore Exotic Weed at Green Pentagon Cannabis on Queen West near Parkdale and review the dedicated flower collection.",
  PREMIUM: "Explore Premium Weed at Green Pentagon Cannabis on Queen West near Parkdale through its dedicated flower collection.",
  "AAA+": "Explore AAA+ Weed at Green Pentagon Cannabis on Queen West near Parkdale through its dedicated flower collection.",
  AA: "Explore AA Weed at Green Pentagon Cannabis on Queen West near Parkdale through its dedicated flower collection.",
  BUDGET: "Explore Budget Weed at Green Pentagon Cannabis on Queen West near Parkdale without a promotion or availability claim.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed in Queen West & Parkdale",
  PREMIUM: "Premium Weed in Queen West & Parkdale",
  "AAA+": "AAA+ Weed in Queen West & Parkdale",
  AA: "AA Weed in Queen West & Parkdale",
  BUDGET: "Budget Weed in Queen West & Parkdale",
};
