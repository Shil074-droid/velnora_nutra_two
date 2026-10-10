/** Domain types for the Velnora Nutra catalogue and cart. */

export type ProductCategory =
  | "longevity"
  | "immunity"
  | "cognition"
  | "vitality"
  | "digestive"
  | "beauty";

export interface Category {
  id: string;
  slug: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

/** Accent used for the generated product artwork placeholder. */
export type ProductAccent = "forest" | "sage" | "stone" | "gold";

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  /** Price in major units (e.g. 48 = $48.00). */
  price: number;
  /** ISO 4217 currency code. */
  currency: string;
  servings: number;
  /** Delivery form, e.g. "Capsules" or "Powder". */
  form: string;
  keyBenefits: string[];
  ingredients: string;
  /** Optional short label shown on the card, e.g. "Bestseller". */
  badge?: string;
  featured?: boolean;
  inStock: boolean;
  /** Average rating, 0–5. */
  rating: number;
  reviewCount: number;
  /** Optional image path; falls back to a generated tinted panel. */
  image?: string;
  accent: ProductAccent;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartLine {
  product: Product;
  quantity: number;
  lineTotal: number;
}

export interface CartSummary {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
}
