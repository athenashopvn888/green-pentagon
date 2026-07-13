import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>GREEN PENTAGON CANNABIS</div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 1267 Queen St W, Toronto. Visit
              Green Pentagon Cannabis For Premium Flower, Edibles, Vapes &amp;
              More. Open daily: 10:00 AM - 12:00 AM.
            </p>
            <div className={styles.buttons}></div>
          </div>

          {/* Column 2 Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>1267 Queen St W</span>
              <span>Toronto, ON M6K 2J2</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+14163885765" style={{ color: "inherit" }}>
                  (416) 388-5765
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>
                Open Daily: 10:00 AM - 12:00 AM
              </span>
            </div>
          </div>

          {/* Column 3 Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/info/queen-west-weed-dispensary">
                Queen West Dispensary
              </Link>
              <Link href="/info/cheap-weed-queen-west">
                Cheap Weed Queen West
              </Link>
              <Link href="/info/native-cigarettes-queen-west">
                Native Cigarettes
              </Link>
              <Link href="/info/weed-store-near-queen-west">
                Queen West Weed Store
              </Link>
              <Link href="/weed-dispensary-toronto/">
                Green Pentagon Cannabis Weed Dispensary in Toronto
              </Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://greenpentagoncannabis.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            {new Date().getFullYear()} Green Pentagon Cannabis. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
