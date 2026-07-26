"use client";

import { useEffect, useState } from "react";
import {
  GPC_SALE_END_LABEL,
  GPC_SALE_LINES,
  isGpcSaleCampaignActive,
} from "../lib/gpcSaleCampaign";
import styles from "./SaleBanner.module.css";

export default function SaleBanner() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => setActive(isGpcSaleCampaignActive());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!active) return null;

  return (
    <section className={styles.banner} aria-label="Limited time flower sales">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          GREEN PENTAGON CANNABIS · ENDS {GPC_SALE_END_LABEL}
        </p>
        <h2 className={styles.title}>LIMITED TIME SALES!!</h2>
        <div className={styles.deals}>
          {GPC_SALE_LINES.map((line) => (
            <strong key={line} className={styles.deal}>
              {line}
            </strong>
          ))}
        </div>
        <p className={styles.note}>
          Qualifying SKUs and available weights only. Lower existing sale prices
          stay in effect.
        </p>
      </div>
    </section>
  );
}
