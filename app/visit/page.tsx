import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import {
  STORE_NAP,
  VISIT_FAQS,
  faqPageJsonLd,
} from "../lib/storeNap";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "How to Get to Green Pentagon Cannabis | Parkdale & Queen West",
  },
  description:
    "Walk-in directions for Green Pentagon Cannabis at 1267 Queen St W: 501 Queen streetcar, Dufferin and Brock stops, Green P and street parking, Gardiner notes, and 19+ ID. Open Daily: 10:00 AM - 12:00 AM.",
  alternates: {
    canonical: `${STORE_NAP.origin}/visit`,
  },
  openGraph: {
    title: "How to Get to Green Pentagon Cannabis on Queen West",
    description:
      "Reach the walk-in shop at 1267 Queen St W from Parkdale Village, Queen & Dufferin, and Brock. Adults 19+.",
    url: `${STORE_NAP.origin}/visit`,
  },
};

export default function VisitPage() {
  const nap = STORE_NAP;

  return (
    <main className={styles.main}>
      <JsonLd data={faqPageJsonLd(VISIT_FAQS)} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            {nap.neighborhood} · {nap.ageLine} · Walk-in
          </p>
          <h1 className={styles.heroTitle}>
            How to Get to Green Pentagon Cannabis on Queen West
          </h1>
          <p className={styles.heroLead}>
            This is the walk-in reach guide for the shop at {nap.addressLine}.
            It is written for people already on the Queen West / Parkdale
            streetcar — not for a city-wide Toronto delivery search. Hours stay{" "}
            {nap.hoursLabel}. Bring ID. Menu pages do not confirm live stock.
          </p>
          <div className={styles.napCard}>
            <strong>Address, phone, hours</strong>
            <p>
              Green Pentagon Cannabis
              <br />
              1267 Queen St W
              <br />
              Toronto, ON M6K 2J2
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${nap.phoneIntl}`}>+1 (437) 290-3657</a>
            </p>
            <p>Open Daily: 10:00 AM - 12:00 AM</p>
            <p>
              Nearest intersection: {nap.intersection}. {nap.ageLine}.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Transit: 501 Queen, Dufferin, and Brock</h2>
          <p>
            Queen Street West is the spine. The 501 Queen streetcar travels the
            same street as the shop, which is the most literal transit answer if
            you are already on Queen. From the east, ride to Dufferin and walk
            a short stretch west to 1267. From western Parkdale, the Brock stop
            puts you on the village side of the same corridor — finish on foot
            toward Dufferin rather than assuming the car drops you at the door.
          </p>
          <p>
            The 29 Dufferin bus and Dufferin Gate Loop sit south toward
            Exhibition Place. Treat the loop as a transfer landmark, not as the
            storefront. After you leave the Exhibition grounds you still need
            Queen Street; walk north to Queen and turn toward 1267 instead of
            drifting onto the lakeshore path.
          </p>
          <p>
            Always check current TTC service, construction, and night-time
            substitutions before you travel — this page is a planning sketch,
            not a live vehicle feed. If you are coming after a show at
            Exhibition Place, give yourself the extra block north to Queen;
            the door faces the streetcar, not the Gardiner.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Parking on Queen West and Parkdale laterals</h2>
          <p>
            Evening street parking on Queen Street West and the residential
            laterals is the pattern locals already use. Close Avenue, Cowan
            Avenue, and Dunn Avenue are the usual overflow loops when the Queen
            frontage is tight. Signs rotate by block and by hour. Read the post
            when you stop. Do not park on streetcar tracks or in rush-hour
            clearways just because a previous visit was easy.
          </p>
          <p>
            Green P lots around Queen and Dufferin are the backup when dinner
            hour or a weekend late-night crowd fills the curb. There is no
            dedicated private lot claimed on this page. If an exact stall
            matters, allow extra time or come on the 501. Peak warnings are
            real on this stretch: the streetcar lane is not a loading zone.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Landmarks on the Queen West / Parkdale stretch</h2>
          <p>
            Think of the pin as the seam between West Queen West and Parkdale
            Village — the Gladstone Hotel sits just east at 1214 Queen, and
            the Parkdale storefront strip continues west toward Brock and
            Jameson. Useful mental markers:
          </p>
          <ul>
            <li>Queen Street West meeting Dufferin Street</li>
            <li>The Gladstone Hotel just east of the door</li>
            <li>Parkdale Village continuing west toward Brock and Dunn</li>
            <li>Dufferin Gate Loop and Exhibition Place to the south</li>
            <li>
              The CAMH campus further east on Queen, used only as a wayfinding
              marker — this storefront faces 1267, west of Dufferin
            </li>
          </ul>
          <p>
            Drivers coming off the Gardiner typically use the Jameson Avenue
            or Dufferin Street exits, then work north to Queen. Jameson is the
            Parkdale-native off-ramp; Dufferin is the straighter shot if you
            already know the Dufferin and Queen pinch. This page does not list
            other shops and does not send you to another West End pin.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What to bring (adults 19+)</h2>
          <p>
            Government-issued photo ID proving you are 19 or older is required.
            Walk-in only — no appointment. Listed in-store payments are debit
            and cash. If one exact product is the whole reason for the trip,
            call {nap.phoneDisplay} during listed hours instead of treating a
            category page as a reservation.
          </p>
          <p>
            Delivery is a different URL with its own neighbourhood radius. Use{" "}
            <Link href="/delivery">the delivery menu</Link> when you want an
            order brought to an address in Parkdale or along Queen West. Use
            this visit page when you are coming to 1267 Queen St W yourself.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/exotic-weed" className={`${styles.cta} ${styles.ctaPrimary}`}>
              Browse the walk-in menu
            </Link>
            <a
              href={`tel:${nap.phoneIntl}`}
              className={`${styles.cta} ${styles.ctaSecondary}`}
            >
              Call {nap.phoneDisplay}
            </a>
          </div>
          <p className={styles.ageNote}>{nap.ageLine}. No medical claims. Selection varies.</p>
        </section>

        <section className={styles.section}>
          <h2>Map</h2>
          <p>
            Search {nap.addressLine}. The embed below uses that same NAP
            string.
          </p>
          <div className={styles.mapWrap}>
            <iframe
              title="Map of Green Pentagon Cannabis at 1267 Queen St W"
              src={nap.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Visit FAQs</h2>
          {VISIT_FAQS.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
