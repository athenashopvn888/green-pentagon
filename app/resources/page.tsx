import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME } from "./resourceData";
import { pageTitle } from "../lib/storeNap";

export const metadata: Metadata = {
  title: pageTitle(RESOURCE_HOME.seoTitle),
  description: RESOURCE_HOME.description,
  alternates: { canonical: "https://www.greenpentagoncannabis.com/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={RESOURCE_HOME} />;
}
