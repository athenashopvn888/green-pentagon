import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games Green Pentagon Cannabis | Toronto",
  description:
    "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Green Pentagon Cannabis.",
  alternates: {
    canonical: "https://www.greenpentagoncannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
