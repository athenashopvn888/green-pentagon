import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { STORE_NAP, faqPageJsonLd } from "../lib/storeNap";
import styles from "./hours.module.css";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

const HOURS_FAQS = [
  {
    q: "What time does Green Pentagon Cannabis open and close?",
    a: "We're open every day from 10:00 AM to 12:00 AM (midnight), seven days a week. Adults 19+ with government-issued photo ID.",
  },
  {
    q: "Are you open on holidays?",
    a: "Holiday hours can change. Call +1 (437) 290-3657 and we'll tell you what's posted for the day.",
  },
  {
    q: "Where are you?",
    a: "1267 Queen St W, Toronto, ON M6K 2J2, on Queen West in Parkdale. See the visit page for transit and parking.",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Store Hours | Green Pentagon Cannabis | Queen West" },
  description:
    "Green Pentagon Cannabis at 1267 Queen St W is open daily from 10:00 AM to 12:00 AM. Adults 19+. Call +1 (437) 290-3657.",
  alternates: { canonical: `${STORE_NAP.origin}/hours` },
  openGraph: {
    title: "Store Hours | Green Pentagon Cannabis | Queen West",
    description: "Open daily 10:00 AM to 12:00 AM at 1267 Queen St W. Adults 19+.",
    url: `${STORE_NAP.origin}/hours`,
  },
};

export default function HoursPage() {
  const nap = STORE_NAP;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${nap.origin}/hours#webpage`,
    url: `${nap.origin}/hours`,
    name: "Store Hours | Green Pentagon Cannabis",
    about: { "@id": `${nap.origin}/#store` },
  };
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqPageJsonLd(HOURS_FAQS)} />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            {nap.neighborhood} · {nap.ageLine}
          </p>
          <h1 className={styles.heroTitle}>Green Pentagon Cannabis Hours</h1>
          <p className={styles.heroLead}>
            We&apos;re open every day from 10:00 AM to 12:00 AM at {nap.addressLine}. Walk in, show your ID and
            you&apos;re set.
          </p>
          <div className={styles.napCard}>
            <strong>Address, phone, hours</strong>
            <p>
              Green Pentagon Cannabis
              <br />
              {nap.streetAddress}
              <br />
              {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
            </p>
            <p>
              Phone: <a href={`tel:${nap.phoneIntl}`}>{nap.phoneDisplay}</a>
            </p>
            <p>{nap.hoursLabel}</p>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Weekly hours</h2>
          {DAYS.map((day) => (
            <div className={styles.weekRow} key={day}>
              <span>{day}</span>
              <strong>10:00 AM - 12:00 AM</strong>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Before you come</h2>
          <p>
            Bring government-issued photo ID showing you are 19 or older. If you&apos;re after one specific product,
            call {nap.phoneDisplay} first. Looking for directions? See the <Link href="/visit">visit page</Link>.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/visit" className={`${styles.cta} ${styles.ctaPrimary}`}>
              Directions
            </Link>
            <a href={`tel:${nap.phoneIntl}`} className={`${styles.cta} ${styles.ctaSecondary}`}>
              Call {nap.phoneDisplay}
            </a>
          </div>
          <p className={styles.ageNote}>{nap.ageLine}. Photo ID required.</p>
        </section>

        <section className={styles.section}>
          <h2>Hours FAQs</h2>
          {HOURS_FAQS.map((faq) => (
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
