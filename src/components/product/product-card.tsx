"use client";

import Link from "next/link";
import { Check, Plus, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ProductArt } from "@/components/product/product-art";
import { useCart } from "@/lib/cart/cart-context";
import type { Product } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";

function Rating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-charcoal/60">
      <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
      <span className="font-medium text-charcoal/80">
        {rating.toFixed(1)}
      </span>
      <span>({count})</span>
    </div>
  );
}

/**
 * Reusable product card: artwork, badge, name, tagline, rating, price,
 * and a one-click add-to-cart. Links through to the product detail page.
 */
export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addItem, quantityOf } = useCart();
  const inCart = quantityOf(product.id) > 0;

  return (
    <article
      className={cn(
        "group relative flex flex-col",
        className,
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block"
        aria-label={`View ${product.name}`}
      >
        <ProductArt
          product={product}
          className="aspect-[4/5] w-full transition-transform duration-500 ease-soft group-hover:scale-[1.02]"
        />
        {product.badge ? (
          <Badge
            tone={product.badge === "New" ? "gold" : "forest"}
            className="absolute top-3 left-3"
          >
            {product.badge}
          </Badge>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg leading-snug text-charcoal">
              <Link
                href={`/products/${product.slug}`}
                className="transition-colors hover:text-forest"
              >
                {product.name}
              </Link>
            </h3>
            <p className="mt-0.5 text-sm text-charcoal/60">{product.tagline}</p>
          </div>
          <p className="shrink-0 font-serif text-lg text-charcoal">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <Rating rating={product.rating} count={product.reviewCount} />
          <button
            type="button"
            onClick={() => addItem(product.id, 1)}
            disabled={!product.inStock}
            className={cn(
              "inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-xs font-medium tracking-tight transition-colors",
              inCart
                ? "bg-sage-tint text-forest"
                : "bg-forest text-ivory hover:bg-forest-deep",
              !product.inStock && "cursor-not-allowed opacity-50",
            )}
            aria-label={
              inCart
                ? `Add another ${product.name} to cart`
                : `Add ${product.name} to cart`
            }
          >
            {inCart ? (
              <>
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
