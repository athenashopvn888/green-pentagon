import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Green Pentagon Cannabis Blog | Cannabis Menu Guides",
  description: "Read Green Pentagon Cannabis cannabis menu guides, flower tier notes, and local store checks for Toronto shoppers.",
  alternates: {
    canonical: "https://www.greenpentagoncannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
