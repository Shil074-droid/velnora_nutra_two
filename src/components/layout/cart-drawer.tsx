"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

import { ProductArt } from "@/components/product/product-art";
import { ButtonLink, Button } from "@/components/ui/button";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { Container } from "@/components/ui/section";
import { useCart } from "@/lib/cart/cart-context";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { lines, itemCount, subtotal, setQuantity, removeItem, clearCart } = useCart();
  const isOpen = lines.length > 0;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] bg-charcoal/30"
        aria-hidden="true"
      />
    </AnimatePresence>
  );
}

interface CartDrawerContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawerContent({ isOpen, onClose }: CartDrawerContentProps) {
  const { lines, itemCount, subtotal, setQuantity, removeItem, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-charcoal/30"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[300] w-full max-w-sm bg-ivory border-l border-line shadow-lift flex flex-col"
            role="dialog"
            aria-label="Shopping cart"
            aria-modal="true"
          >
            <div className="flex h-16 items-center justify-between px-gutter border-b border-line">
              <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-forest/5 hover:text-forest"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-gutter">
              {lines.length === 0 ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <p className="text-charcoal/60">Your cart is empty</p>
                  <ButtonLink href="/collections" variant="outline">
                    Continue shopping
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              ) : (
                <ul className="flex flex-col divide-y divide-line pb-6">
                  {lines.map(({ product, quantity, lineTotal }) => (
                    <li key={product.id} className="flex gap-4 py-4">
                      <ProductArt
                        product={product}
                        className="h-24 w-20 shrink-0"
                      />
                      <div className="flex flex-1 flex-col justify-between gap-3 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="font-serif text-sm leading-snug text-charcoal truncate">
                              <span>{product.name}</span>
                            </h3>
                            <p className="mt-0.5 text-xs text-charcoal/60">
                              {product.form} · {product.servings} servings
                            </p>
                          </div>
                          <p className="shrink-0 font-serif text-base text-charcoal">
                            {formatPrice(lineTotal, product.currency)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <QuantityStepper
                            value={quantity}
                            onChange={(next) => setQuantity(product.id, next)}
                            max={99}
                          />
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            aria-label={`Remove ${product.name} from cart`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-danger/5 hover:text-danger"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-line p-gutter">
                <dl className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-charcoal/60">
                      Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})
                    </dt>
                    <dd className="font-medium text-charcoal">
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-charcoal/60">Shipping</dt>
                    <dd className="text-charcoal/60">Calculated at checkout</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-line pt-3 text-base">
                    <dt className="font-medium text-charcoal">Total</dt>
                    <dd className="font-serif text-xl text-charcoal">
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                </dl>

                <Button className="mt-6 h-12 w-full" size="lg" onClick={onClose}>
                  Proceed to checkout
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <p className="mt-3 text-center text-xs text-charcoal/50">
                  This is a design demo — no payment is processed.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}