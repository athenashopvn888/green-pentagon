import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Green Pentagon Cannabis | GTA",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Green Pentagon Cannabis in GTA.",
  alternates: {
    canonical: "https://greenpentagoncannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
