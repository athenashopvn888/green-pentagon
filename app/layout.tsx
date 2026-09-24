import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import JsonLd from "./components/JsonLd";
import {
  STORE_NAP,
  HOME_TITLE,
  HOME_DESCRIPTION,
  cannabisStoreJsonLd,
} from "./lib/storeNap";

export const metadata: Metadata = {
  metadataBase: new URL(STORE_NAP.origin),
  title: {
    default: HOME_TITLE,
    // Pages whose title already names the brand must use pageTitle() from storeNap.
    template: "%s | Green Pentagon Cannabis",
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "Queen West Parkdale dispensary",
    "Parkdale cannabis",
    "Green Pentagon Cannabis",
    "weed near Queen and Dufferin",
    "weed near Brock",
    "Parkdale walk-in",
    "1267 Queen St W",
    "Queen West dispensary",
    "adults 19+",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE_NAP.origin,
    siteName: "Green Pentagon Cannabis",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: "https://www.greenpentagoncannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Green Pentagon Cannabis Parkdale / Queen West dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      "https://www.greenpentagoncannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: STORE_NAP.origin,
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nap = STORE_NAP;

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Parkdale, Queen West, Toronto" />
        <meta name="geo.position" content={`${nap.latitude};${nap.longitude}`} />
        <meta name="ICBM" content={`${nap.latitude}, ${nap.longitude}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={cannabisStoreJsonLd()} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2Y80BBQJK4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-2Y80BBQJK4');
 `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WFSEJ9S1XF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-WFSEJ9S1XF');
 `,
          }}
        />
      </head>
      <body>
        <noscript>
          Green Pentagon Cannabis · {nap.addressLine} · {nap.phoneDisplay} ·{" "}
          {nap.hoursLabel} · {nap.ageLine}
        </noscript>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
