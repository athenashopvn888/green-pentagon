import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenpentagoncannabis.com"),
  title: {
    default: "Green Pentagon Cannabis | Queen St W Dispensary",
    template: "%s | Green Pentagon Cannabis",
  },
  description:
    "Green Pentagon Cannabis is a cannabis dispensary on Queen St W with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open Daily: 10:00 AM - 12:00 AM.",
  keywords: [
    "cannabis dispensary GTA",
    "weed store GTA",
    "exotic flower GTA",
    "premium cannabis",
    "Green Pentagon Cannabis",
    "cheap weed GTA",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles GTA",
    "vapes",
    "pre-rolls",
    "native cigarettes GTA",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://greenpentagoncannabis.com",
    siteName: "Green Pentagon Cannabis",
    title: "Green Pentagon Cannabis — Premium GTA Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. GTA's uplifting dispensary at 1267 Queen St W. Open Daily: 10:00 AM - 12:00 AM.",
    images: [
      {
        url: "https://greenpentagoncannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Green Pentagon Cannabis — Premium Cannabis Dispensary GTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Pentagon Cannabis — GTA's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open Daily: 10:00 AM - 12:00 AM at 1267 Queen St W, GTA.",
    images: ["https://greenpentagoncannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
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
    canonical: "https://greenpentagoncannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://greenpentagoncannabis.com",
  name: "Green Pentagon Cannabis",
  description: "Cannabis dispensary at 1267 Queen St W in GTA, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 12:00 AM.",
  url: "https://greenpentagoncannabis.com",
  telephone: "+14163885765",
  image: "https://greenpentagoncannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1267 Queen St W",
    addressLocality: "GTA",
    addressRegion: "ON",
    postalCode: "M6K 2J2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6415588,
    longitude: -79.4312674,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "00:00"
  }
],
  sameAs: [
    "https://greenpentagoncannabis.com/",
    "https://greenpentagoncannabis.com/",
  ],
  hasMap: "https://greenpentagoncannabis.com/",
  areaServed: {
    "@type": "City",
    name: "GTA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="GTA" />
        <meta name="geo.position" content="43.6415588;-79.4312674" />
        <meta name="ICBM" content="43.6415588, -79.4312674" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2Y80BBQJK4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2Y80BBQJK4');
            `
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WFSEJ9S1XF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WFSEJ9S1XF');
            `
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
