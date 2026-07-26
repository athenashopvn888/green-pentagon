export const TV2_DAYTIME_START_HOUR = 10;
export const TV2_DAYTIME_END_HOUR = 17;

export type Tv2DaytimePromo = {
  src: string;
  fallbackSrc?: string;
  alt: string;
};

export const TV2_DAYTIME_PROMOS: Readonly<
  Partial<Record<string, Tv2DaytimePromo>>
> = {
  CIGARETTES: {
    src: "/banners/cig-poster-1.png",
    alt: "Cigarettes Promo",
  },
  VAPES: {
    src: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/cannabis_banner_mashup_variation_01_600x600.webp",
    fallbackSrc:
      "/banners/cannabis_banner_mashup_variation_01_600x600.webp",
    alt: "Ultimate Cannabis Collection Promo",
  },
};

export function isTv2Daytime(now = new Date()): boolean {
  const hour = now.getHours();
  return hour >= TV2_DAYTIME_START_HOUR && hour < TV2_DAYTIME_END_HOUR;
}

export function getTv2DaytimePromo(
  cardId: string,
  daytime: boolean,
): Tv2DaytimePromo | undefined {
  return daytime ? TV2_DAYTIME_PROMOS[cardId] : undefined;
}
