import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { weedOwner } from "@/app/lib/weedDiscovery";
import { STORE_NAP } from "@/app/lib/storeNap";

export const metadata: Metadata = {
  title: { absolute: weedOwner.seoTitle },
  description: weedOwner.metaDescription,
  alternates: {
    canonical: `${STORE_NAP.origin}/visit`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
