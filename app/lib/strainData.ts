interface StrainEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

const menuNotes = [
  { emoji: "*", label: "Menu Listed" },
  { emoji: "+", label: "Compare Tier" },
  { emoji: "i", label: "Ask Staff" },
];

export function getStrainData(name: string, type: "indica" | "sativa" | "hybrid", tier: string, thc: string): StrainEffects {
  void thc;
  const typeLabel = type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  return {
    effects: menuNotes,
    description: `${name} is listed in the ${tier} ${typeLabel} lane at Green Pentagon Cannabis. Compare the current product page, menu details, weight, and posted price before choosing.`,
    metaDescription: `${name} at Green Pentagon Cannabis on Queen Street West. Review the current ${tier} listing and ask staff when an item detail matters.`,
  };
}
