import type { Category } from "@/lib/types";
import { Leaf, Shield, Sparkles, FlaskConical, Recycle, Heart } from "lucide-react";

/** Product categories shown in navigation and collection pages. */
export const categories: Category[] = [
  {
    id: "longevity",
    slug: "longevity",
    name: "Longevity",
    tagline: "Support healthy ageing at the cellular level.",
    description:
      "Clinically studied compounds that support cellular energy, repair, and healthy ageing over the long term.",
    icon: Shield,
  },
  {
    id: "immunity",
    slug: "immunity",
    name: "Immunity",
    tagline: "Everyday defences, thoughtfully formulated.",
    description:
      "Balanced blends of vitamins, minerals, and botanicals to support a resilient immune system all year round.",
    icon: Shield,
  },
  {
    id: "cognition",
    slug: "cognition",
    name: "Cognition",
    tagline: "Clarity, focus, and calm attention.",
    description:
      "Nootropic formulas designed to support memory, focus, and mental stamina without the crash.",
    icon: Sparkles,
  },
  {
    id: "vitality",
    slug: "vitality",
    name: "Vitality",
    tagline: "Steady energy from morning to night.",
    description:
      "Adaptogens, greens, and restorative blends that support energy, mood, and restful recovery.",
    icon: FlaskConical,
  },
  {
    id: "digestive",
    slug: "digestive",
    name: "Digestive",
    tagline: "A calm, well-supported gut.",
    description:
      "Prebiotic fibres, enzymes, and probiotics to support digestion and a balanced microbiome.",
    icon: Recycle,
  },
  {
    id: "beauty",
    slug: "beauty",
    name: "Beauty",
    tagline: "Nourish skin, hair, and nails from within.",
    description:
      "Collagen peptides and antioxidant blends that support skin elasticity and natural radiance.",
    icon: Heart,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
