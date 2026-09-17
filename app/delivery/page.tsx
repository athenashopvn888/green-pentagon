import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Parkdale / Queen West Cannabis Delivery | Green Pentagon Cannabis" },
  description:
    "Neighbourhood-scoped cannabis delivery from Green Pentagon Cannabis for Parkdale, Queen West, and the Dufferin–Brock stretch of Queen. Adults 19+. Walk-in directions live on /visit.",
  alternates: { canonical: "https://www.greenpentagoncannabis.com/delivery" },
};

export default function DeliveryPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Parkdale Cannabis Delivery Menu",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: menu.products.length,
        itemListElement: menu.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Green Pentagon Cannabis neighbourhood cannabis delivery",
      serviceType: "Cannabis delivery",
      areaServed: [
        { "@type": "Place", name: "Parkdale" },
        { "@type": "Place", name: "Queen West" },
        { "@type": "Place", name: "Parkdale Village" },
      ],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <DeliveryContent />
    </>
  );
}
