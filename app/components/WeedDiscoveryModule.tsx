import Link from "next/link";
import styles from "./WeedDiscoveryModule.module.css";
import { weedOwner as store } from "../lib/weedDiscovery";

export function WeedDiscoveryModule() {
  const cards = [
    { href: "/info/queen-west-weed-dispensary", title: "Queen West Weed Dispensary", text: "Local storefront guidance for Queen West and Parkdale." },
    { href: "/delivery", title: "Weed Delivery", text: "Review the separate delivery page and its current service guidance." },
    { href: "/info/native-cigarettes-queen-west", title: "Native Cigarettes", text: "Plan a cigarette stop and check the current menu before visiting." },
    { href: "/info/nicotine-vapes-queen-west", title: "Nicotine Vapes", text: "Compare adult nicotine-vape formats and current category details." },
    { href: "/visit", title: "Visit Green Pentagon", text: "Find the address, phone, transit notes and parking guidance." },
  ];
  return (
    <section className={styles.section} aria-labelledby="weed-discovery-title">
      <div className={styles.inner}>
        <p className={styles.kicker}>{store.hoursLabel ? `${store.hoursLabel} · Adults 19+` : "Adults 19+"}</p>
        <h2 id="weed-discovery-title">{store.home.title}</h2>
        <p>{store.home.text}</p>
        <div className={styles.cardGrid}>
          {cards.map((card) => <Link href={card.href} className={styles.card} key={card.href}><strong>{card.title}</strong><span>{card.text}</span></Link>)}
        </div>
        <div className={styles.actions}>
          <Link href={store.home.primaryHref ?? store.ownerPath} className={styles.primary}>{store.home.primaryLabel}</Link>
          <Link href={store.home.secondaryHref} className={styles.secondary}>{store.home.secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}
