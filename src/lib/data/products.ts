import type { Product } from "@/lib/types";

/**
 * Sample catalogue used throughout the demo. This is illustrative data —
 * no medical claims are intended.
 */
export const products: Product[] = [
  {
    id: "prod_verdant_longevity",
    slug: "verdant-longevity-complex",
    name: "Verdant Longevity Complex",
    tagline: "Cellular energy & healthy ageing",
    description:
      "A considered daily blend of NMN, trans-resveratrol, and CoQ10 to support cellular energy production and healthy ageing over time.",
    category: "longevity",
    price: 68,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    keyBenefits: [
      "Supports cellular energy production",
      "Antioxidant protection against oxidative stress",
      "Promotes healthy ageing pathways",
    ],
    ingredients: "NMN, trans-resveratrol, CoQ10, BioPerine®.",
    badge: "Bestseller",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 214,
    accent: "forest",
  },
  {
    id: "prod_cellular_nmn",
    slug: "cellular-nmn-500",
    name: "Cellular NMN 500",
    tagline: "High-purity NMN, third-party tested",
    description:
      "A straightforward, high-purity NMN formula to support NAD+ levels and everyday cellular vitality.",
    category: "longevity",
    price: 54,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    keyBenefits: [
      "Supports healthy NAD+ levels",
      "Third-party tested for purity",
      "Vegetarian capsule",
    ],
    ingredients: "β-Nicotinamide mononucleotide (NMN).",
    inStock: true,
    rating: 4.6,
    reviewCount: 128,
    accent: "stone",
  },
  {
    id: "prod_aurora_immunity",
    slug: "aurora-immunity-blend",
    name: "Aurora Immunity Blend",
    tagline: "Year-round immune support",
    description:
      "A balanced blend of vitamin C, vitamin D3, zinc, and elderberry to support a resilient immune response every day.",
    category: "immunity",
    price: 36,
    currency: "USD",
    servings: 60,
    form: "Capsules",
    keyBenefits: [
      "Supports normal immune function",
      "Vitamin C, D3 & zinc",
      "With elderberry extract",
    ],
    ingredients: "Vitamin C, vitamin D3, zinc, elderberry extract.",
    badge: "Fan favourite",
    featured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 302,
    accent: "sage",
  },
  {
    id: "prod_shield_elderberry",
    slug: "shield-elderberry-zinc",
    name: "Shield Elderberry + Zinc",
    tagline: "Botanical defence with a gentle taste",
    description:
      "A soothing elderberry syrup with zinc and acerola, formulated for the whole household during colder months.",
    category: "immunity",
    price: 28,
    currency: "USD",
    servings: 24,
    form: "Syrup",
    keyBenefits: [
      "Rich in antioxidants",
      "Gentle, family-friendly formula",
      "No artificial colours",
    ],
    ingredients: "Elderberry extract, acerola, zinc gluconate, honey.",
    inStock: true,
    rating: 4.5,
    reviewCount: 96,
    accent: "gold",
  },
  {
    id: "prod_clarity_focus",
    slug: "clarity-focus-formula",
    name: "Clarity Focus Formula",
    tagline: "Calm, sustained concentration",
    description:
      "A nootropic blend of L-theanine, lion's mane, and B-vitamins to support focus and mental stamina without the jitters.",
    category: "cognition",
    price: 44,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    keyBenefits: [
      "Supports attention & memory",
      "L-theanine for calm focus",
      "With lion's mane mushroom",
    ],
    ingredients: "L-theanine, lion's mane, Bacopa monnieri, B6, B12.",
    badge: "New",
    featured: true,
    inStock: true,
    rating: 4.6,
    reviewCount: 143,
    accent: "forest",
  },
  {
    id: "prod_solstice_greens",
    slug: "solstice-daily-greens",
    name: "Solstice Daily Greens",
    tagline: "Whole-food greens in one scoop",
    description:
      "A clean, great-tasting daily greens powder with spirulina, chlorella, and adaptogens to support everyday vitality.",
    category: "vitality",
    price: 48,
    currency: "USD",
    servings: 30,
    form: "Powder",
    keyBenefits: [
      "Supports daily energy",
      "Spirulina & chlorella",
      "With adaptogenic herbs",
    ],
    ingredients: "Spirulina, chlorella, wheatgrass, ashwagandha, ginger.",
    featured: true,
    inStock: true,
    rating: 4.4,
    reviewCount: 187,
    accent: "sage",
  },
  {
    id: "prod_rooted_elixir",
    slug: "rooted-adaptogen-elixir",
    name: "Rooted Adaptogen Elixir",
    tagline: "Balance & steady stress response",
    description:
      "A liquid adaptogen elixir with ashwagandha, rhodiola, and reishi to support a balanced response to everyday stress.",
    category: "vitality",
    price: 42,
    currency: "USD",
    servings: 28,
    form: "Liquid",
    keyBenefits: [
      "Supports a healthy stress response",
      "Ashwagandha, rhodiola & reishi",
      "Easy-to-take liquid",
    ],
    ingredients: "Ashwagandha, rhodiola rosea, reishi, glycerin.",
    inStock: true,
    rating: 4.5,
    reviewCount: 112,
    accent: "stone",
  },
  {
    id: "prod_nocturne_sleep",
    slug: "nocturne-sleep-essence",
    name: "Nocturne Sleep Essence",
    tagline: "Restorative, unhurried rest",
    description:
      "A gentle evening blend of magnesium glycinate, L-theanine, and chamomile to support restful sleep.",
    category: "vitality",
    price: 38,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    keyBenefits: [
      "Supports natural sleep cycles",
      "Magnesium glycinate",
      "Non-habit forming",
    ],
    ingredients: "Magnesium glycinate, L-theanine, chamomile, passionflower.",
    inStock: true,
    rating: 4.7,
    reviewCount: 205,
    accent: "forest",
  },
  {
    id: "prod_terrain_gut",
    slug: "terrain-gut-restore",
    name: "Terrain Gut Restore",
    tagline: "Daily digestive balance",
    description:
      "A synbiotic formula combining probiotics, prebiotic fibres, and digestive enzymes to support a balanced gut.",
    category: "digestive",
    price: 40,
    currency: "USD",
    servings: 30,
    form: "Capsules",
    keyBenefits: [
      "Supports a balanced microbiome",
      "Probiotics + prebiotic fibre",
      "With digestive enzymes",
    ],
    ingredients: "Lactobacillus blend, inulin, amylase, protease.",
    inStock: true,
    rating: 4.3,
    reviewCount: 88,
    accent: "sage",
  },
  {
    id: "prod_bloom_collagen",
    slug: "bloom-collagen-peptides",
    name: "Bloom Collagen Peptides",
    tagline: "Skin, hair & nail support",
    description:
      "Hydrolysed collagen peptides with vitamin C and biotin to support skin elasticity and natural radiance.",
    category: "beauty",
    price: 46,
    currency: "USD",
    servings: 27,
    form: "Powder",
    keyBenefits: [
      "Supports skin elasticity",
      "Hydrolysed collagen peptides",
      "With vitamin C & biotin",
    ],
    ingredients: "Bovine collagen peptides, vitamin C, biotin.",
    inStock: true,
    rating: 4.6,
    reviewCount: 158,
    accent: "gold",
  },
];

export const featuredProducts: Product[] = products.filter(
  (product) => product.featured,
);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
