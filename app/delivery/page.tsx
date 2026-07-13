import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon Green Pentagon Cannabis | Toronto",
  description:
    "Get notified when Green Pentagon Cannabis prepares delivery for Queen West, Parkdale, and nearby west Toronto.",
  alternates: {
    canonical: "https://greenpentagoncannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
