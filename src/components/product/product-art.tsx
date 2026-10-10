import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

const accentStyles: Record<Product["accent"], string> = {
  forest: "bg-forest text-ivory",
  sage: "bg-sage-tint text-forest",
  stone: "bg-stone text-charcoal",
  gold: "bg-gold/25 text-forest",
};

/**
 * Product visual. Uses a real image when one is supplied, otherwise renders
 * a tinted editorial panel with the product's initial — a deliberate,
 * on-brand placeholder rather than a broken image.
 */
export function ProductArt({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const initial = product.name.charAt(0);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-soft",
        accentStyles[product.accent],
        className,
      )}
    >
      {product.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-serif text-6xl font-light tracking-tight opacity-90 sm:text-7xl">
            {initial}
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full border border-current opacity-20"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full border border-current opacity-10"
          />
        </div>
      )}
    </div>
  );
}
