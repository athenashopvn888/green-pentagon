export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Toronto | Green Pentagon Cannabis",
    seoIntro: "Green Pentagon Cannabis presents Exotic Weed as one of its Cannabis Flower collections for shoppers exploring the broader Weed selection in Toronto. Browse the products presented within this collection and compare Exotic Weed with other Green Pentagon flower collections that interest you.",
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
    seoTitle: "Premium Weed & Cannabis Flower Toronto | Green Pentagon Cannabis",
    seoIntro: "Premium Weed is a Green Pentagon Cannabis Flower collection for shoppers who want to explore this part of the broader Weed selection. Browse the collection and compare Premium Weed with other Green Pentagon flower selections as you explore.",
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
    seoTitle: "AAA+ Weed & Cannabis Flower Toronto | Green Pentagon Cannabis",
    seoIntro: "Green Pentagon Cannabis AAA+ Weed gives shoppers a focused Cannabis Flower collection to explore within the broader Weed selection. Browse the products presented within this collection and compare AAA+ Weed with other Green Pentagon flower selections that interest you.",
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
    seoTitle: "AA Weed & Cannabis Flower Toronto | Green Pentagon Cannabis",
    seoIntro: "AA Weed is one of Green Pentagon Cannabis's Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection and compare AA Weed with other flower collections that interest you.",
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
    seoTitle: "Budget Weed & Cannabis Flower Toronto | Green Pentagon Cannabis",
    seoIntro: "Green Pentagon Cannabis Budget Weed is a Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the collection and compare Budget Weed with other Green Pentagon flower selections as you explore.",
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
  EXOTIC: "Explore Green Pentagon Cannabis Exotic Weed and compare this Cannabis Flower collection with Premium Weed, AAA+ Weed, AA Weed and Budget Weed in Toronto.",
  PREMIUM: "Explore Green Pentagon Cannabis Premium Weed and compare this Cannabis Flower collection with the store's other Weed flower collections in Toronto.",
  "AAA+": "Explore Green Pentagon Cannabis AAA+ Weed and compare this Cannabis Flower collection with Exotic Weed, Premium Weed, AA Weed and Budget Weed.",
  AA: "Explore Green Pentagon Cannabis AA Weed and compare this Cannabis Flower collection with the store's other Weed flower collections in Toronto.",
  BUDGET: "Explore Green Pentagon Cannabis Budget Weed and compare this Cannabis Flower collection with AA Weed, AAA+ Weed, Premium Weed and Exotic Weed.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
