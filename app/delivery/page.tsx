import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Green Pentagon Cannabis | GTA",
  description: "Get notified when Green Pentagon Cannabis launches same-day weed delivery across GTA and surrounding areas.",
  alternates: {
    canonical: "https://greenpentagoncannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
