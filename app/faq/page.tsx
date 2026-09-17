import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: { absolute: "FAQ | Parkdale & Queen West — Green Pentagon Cannabis" },
  description:
    "Hours, parking, 501 Queen streetcar, 19+ ID, and walk-in questions for Green Pentagon Cannabis at 1267 Queen St W. Adults 19+. Open Daily: 10:00 AM - 12:00 AM.",
  alternates: {
    canonical: "https://www.greenpentagoncannabis.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: " Location & Hours",
    faqs: [
      {
        q: "Where is Green Pentagon Cannabis located?",
        a: "Green Pentagon Cannabis is at 1267 Queen St W, Toronto, ON M6K 2J2, on the Queen West / Parkdale stretch just west of Dufferin toward Brock. It is a walk-in pin for this stretch of Queen — not a downtown core shop.",
      },
      {
        q: "What are your hours?",
        a: "We are open daily from 10:00 AM to 12:00 AM (midnight). Walk in anytime — no appointment needed. Adults 19+ with government-issued photo ID.",
      },
      {
        q: "Is there parking nearby?",
        a: "Evening street parking is often available on Queen Street West and nearby laterals such as Close, Cowan, and Dunn. Follow posted signs; restrictions change by block and hour. Green P around Queen & Dufferin is the backup. The visit page has the parking loop notes.",
      },
      {
        q: "How far are you from Parkdale Village?",
        a: "The shop sits on Queen Street West at the Parkdale Village / Dufferin seam. From western Parkdale you come east from Brock; from the Gladstone you walk a few doors west. How-to-reach detail is on /visit.",
      },
      {
        q: "How can I get to Green Pentagon Cannabis?",
        a: "Use the 501 Queen streetcar along Queen Street West (Dufferin or Brock stops), the 29 Dufferin bus, or treat Dufferin Gate Loop as a transfer toward Exhibition Place. Drivers typically exit the Gardiner at Jameson or Dufferin. Full transit and parking notes are on the visit page.",
      },
    ],
  },
  {
    title: " Products & Menu",
    faqs: [
      {
        q: "What products do you carry?",
        a: "We organize flower into five collections: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Separate categories cover edibles, vapes, concentrates, pre-rolls, cigarettes and accessories.",
      },
      {
        q: "Do you have a current menu?",
        a: "Yes. Use the online menu to review current product names, categories, weights, and posted prices before visiting.",
      },
      {
        q: "What are your flower tiers?",
        a: "The menu separates flower into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed collections. Explore each collection to compare the product information presented while browsing.",
      },
      {
        q: "Do you sell edibles?",
        a: "The edibles category lists current public menu details for gummies, chocolates, and other formats when listed.",
      },
      {
        q: "Do you sell vapes?",
        a: "The vape category pages organize disposable and cartridge formats. Review the current menu for product details.",
      },
      {
        q: "Do you sell native cigarettes?",
        a: "Yes! We carry native cigarette options near Queen West, including premium and value brands in multiple varieties.",
      },
    ],
  },
  {
    title: " Pricing & Bundle Offers",
    faqs: [
      {
        q: "What is the cheapest weed you sell?",
        a: "Use the Budget Weed and AA Weed collections to compare the product information presented while browsing.",
      },
      {
        q: "What bundle pricing do you offer?",
        a: "Flower bundle pricing includes a 3g total option the 3g total is shown clearly before purchase. Our Exotic Weed, Premium Weed and AAA+ Weed collections also offer 6g bundle pricing, with 6g total pricing.",
      },
      {
        q: "Do you have ounce deals?",
        a: "Check the relevant flower tier page for current posted ounce options and prices.",
      },
      {
        q: "How does bundle pricing work?",
        a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic Weed, Premium Weed and AAA+ Weed. These are our standard everyday bundle offers.",
      },
      {
        q: "How does the tier pricing work?",
        a: "Each flower listing appears in one of five menu tiers. Use the tier page to compare the posted weight and price details.",
      },
    ],
  },
  {
    title: " Shopping & Experience",
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "No! Green Pentagon Cannabis is walk-in only. Just show up anytime we are open daily from 10:00 AM to 12:00 AM (midnight).",
      },
      {
        q: "Can I order online?",
        a: "Currently you can browse the walk-in menu online and, when you want an order brought to an address, use the neighbourhood delivery menu. The dispatcher confirms whether that address is in the Parkdale / Queen West range. Adults 19+.",
      },
      {
        q: "Do you offer delivery?",
        a: "Yes. Delivery is a separate URL with Parkdale / Queen West / Dufferin–Brock scope — not a city-wide Toronto delivery product. The dispatcher confirms whether an address is in range. Walk-in directions live on /visit.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and debit. No credit cards at this time.",
      },
      {
        q: "Can your staff help me choose a strain?",
        a: "Staff can help compare current menu categories, formats, package details, and posted prices.",
      },
      {
        q: "Is there a minimum purchase?",
        a: "No minimum purchase required. You can buy as little as 1 gram.",
      },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section
          style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}
        >
          <img
            src="/banners/07_FAQ.webp"
            alt="Green Pentagon Cannabis FAQ Your Questions Answered"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about Green Pentagon Cannabis
            at 1267 Queen St W on Queen West / Parkdale.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>+1 (437) 290-3657</strong> or visit us at 1267
              Queen St W, Toronto.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
