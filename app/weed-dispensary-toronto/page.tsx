import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { weedOwner } from "@/app/lib/weedDiscovery";
import { STORE_NAP } from "@/app/lib/storeNap";

export const metadata: Metadata = {
  title: { absolute: weedOwner.seoTitle },
  description: weedOwner.metaDescription,
  alternates: {
    canonical: `${STORE_NAP.origin}/weed-dispensary-toronto`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
