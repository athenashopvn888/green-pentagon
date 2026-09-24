/** Single source of GPC01 NAP, hours, and Queen West / Parkdale copy. Do not invent new hours, phones, or inventory. */

export const STORE_NAP = {
  name: "Green Pentagon Cannabis",
  domain: "www.greenpentagoncannabis.com",
  origin: "https://www.greenpentagoncannabis.com",
  streetAddress: "1267 Queen St W",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M6K 2J2",
  addressCountry: "CA",
  addressLine: "1267 Queen St W, Toronto, ON M6K 2J2",
  phoneDisplay: "+1 (437) 290-3657",
  phoneIntl: "+14372903657",
  hoursLabel: "Open Daily: 10:00 AM - 12:00 AM",
  hoursOpens: "10:00",
  hoursCloses: "00:00",
  latitude: 43.6415588,
  longitude: -79.4312674,
  neighborhood: "Queen West / Parkdale",
  corridor: "Queen West and Parkdale Village",
  intersection: "Queen Street West & Dufferin Street, toward Brock Avenue",
  ageLine: "Adults 19+",
  image:
    "https://www.greenpentagoncannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=1267+Queen+St+W,+Toronto,+ON+M6K+2J2",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1267+Queen+St+W,+Toronto,+ON+M6K+2J2&output=embed",
} as const;

export const HOME_TITLE =
  "Green Pentagon Cannabis | Parkdale / Queen West Dispensary";

/**
 * Root layout `title.template` appends " | Green Pentagon Cannabis".
 * Titles that already name the brand must be absolute so the suffix is not added again.
 */
export function pageTitle(title: string): string | { absolute: string } {
  if (/green pentagon/i.test(title)) return { absolute: title };
  return title;
}
export const HOME_DESCRIPTION =
  "Walk-in cannabis dispensary at 1267 Queen St W for Parkdale and Queen West. Adults 19+. Open Daily: 10:00 AM - 12:00 AM. Call +1 (437) 290-3657.";

/** Visible homepage FAQs — FAQPage JSON-LD must stay in lockstep with these strings. */
export const HOME_FAQS = [
  {
    q: "What are the hours for Green Pentagon Cannabis on Queen West?",
    a: "Green Pentagon Cannabis at 1267 Queen St W is open daily from 10:00 AM to 12:00 AM (midnight). Walk in — no appointment. Adults 19+ must bring government-issued photo ID.",
  },
  {
    q: "Where is Green Pentagon Cannabis in Parkdale?",
    a: "The shop is at 1267 Queen St W, Toronto, ON M6K 2J2, on the Queen West / Parkdale stretch just west of Dufferin, toward Brock. Call +1 (437) 290-3657. Evening street parking is often available; follow posted signs. How-to-reach notes live on the visit page.",
  },
  {
    q: "What can I browse before a Parkdale walk-in?",
    a: "The public menu is split into flower collections (Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, Budget Weed) plus category pages for edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Pages are for browsing posted details, not a live stock feed. Ask at the counter or call if one exact item is the reason for the trip.",
  },
  {
    q: "Do you run city-wide Toronto cannabis delivery from this pin?",
    a: "No. Walk-in at 1267 Queen St W is the neighbourhood job. Delivery is a separate URL with Parkdale / Queen West / Dufferin–Brock scope. The dispatcher confirms whether an address is in range. Adults 19+.",
  },
] as const;

export const VISIT_FAQS = [
  {
    q: "What is the nearest intersection to Green Pentagon Cannabis?",
    a: "Plan around Queen Street West and Dufferin Street, then continue a short block west toward Brock Avenue. The door is 1267 Queen St W, Toronto, ON M6K 2J2 — a Parkdale / Queen West storefront, not a downtown core address.",
  },
  {
    q: "Which TTC routes are useful for a Queen West visit?",
    a: "The 501 Queen streetcar runs on the same street as the shop. Use the Dufferin stop if you are coming from the east, or Brock if you are already in western Parkdale. The 29 Dufferin bus and Dufferin Gate Loop (Exhibition Place) are useful south-side transfers. Check current TTC service before you travel.",
  },
  {
    q: "Where should I park?",
    a: "Evening street parking on Queen Street West and nearby laterals (Close, Cowan, Dunn) is the usual pattern. Restrictions change by block and hour, so read the posted signs. Green P lots around Queen & Dufferin are an option when the streetcar lane is busy. Do not stop on the 501 tracks.",
  },
  {
    q: "What should I bring?",
    a: "Government-issued photo ID proving you are 19 or older. Debit and cash are the listed in-store payment methods. No appointment. If you need one specific product, call +1 (437) 290-3657 during listed hours first.",
  },
] as const;

export function cannabisStoreJsonLd() {
  const nap = STORE_NAP;
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${nap.origin}/#store`,
    name: nap.name,
    description:
      "Walk-in cannabis dispensary on the Queen West / Parkdale corridor at 1267 Queen St W. Adults 19+. Open Daily: 10:00 AM - 12:00 AM.",
    url: nap.origin,
    telephone: nap.phoneIntl,
    image: nap.image,
    priceRange: "$3 - $12/g",
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.streetAddress,
      addressLocality: nap.addressLocality,
      addressRegion: nap.addressRegion,
      postalCode: nap.postalCode,
      addressCountry: nap.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: nap.latitude,
      longitude: nap.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: nap.hoursOpens,
        closes: nap.hoursCloses,
      },
    ],
    hasMap: nap.mapSearchUrl,
    areaServed: [
      { "@type": "Place", name: "Queen West" },
      { "@type": "Place", name: "Parkdale" },
      { "@type": "Place", name: "Parkdale Village" },
    ],
  };
}

export function faqPageJsonLd(
  faqs: readonly { q: string; a: string }[] | readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const name = "q" in faq ? faq.q : faq.question;
      const text = "a" in faq ? faq.a : faq.answer;
      return {
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text,
        },
      };
    }),
  };
}
