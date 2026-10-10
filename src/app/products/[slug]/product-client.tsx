"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, X, Check, Star, Shield, Truck, RotateCcw, Leaf } from "lucide-react";

import { ProductArt } from "@/components/product/product-art";
import { ProductCard } from "@/components/product/product-card";
import { ButtonLink, Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuantityStepper } from "@/components/ui/quantity-stepper";
import { Section, Container } from "@/components/ui/section";
import { useCart } from "@/lib/cart/cart-context";
import { getProductsByCategory } from "@/lib/data/products";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { Sparkles } from "lucide-react";

interface ProductClientProps {
  product: Product;
}

const productIcons = {
  longevity: Shield,
  immunity: Leaf,
  cognition: Sparkles,
  vitality: Leaf,
  digestive: Leaf,
  beauty: Sparkles,
};

export default function ProductClient({ product }: ProductClientProps) {
  const { addItem, quantityOf } = useCart();
  const inCart = quantityOf(product.id) > 0;
  const [selectedImage, setSelectedImage] = useState(0);
  const [showMobileGallery, setShowMobileGallery] = useState(false);

  const IconComponent = productIcons[product.category as keyof typeof productIcons] || Leaf;

  // Generate placeholder images for gallery
  const galleryImages = Array.from({ length: 4 }, (_, i) => ({
    src: product.image,
    alt: `${product.name} - view ${i + 1}`,
  }));

  return (
    <>
      {/* Breadcrumb */}
      <nav className="border-b border-line bg-ivory" aria-label="Breadcrumb">
        <Container className="py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-charcoal/50 hover:text-forest transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-2 text-charcoal/30">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href="/collections" className="text-charcoal/50 hover:text-forest transition-colors">Shop</Link>
            </li>
            <li className="flex items-center gap-2 text-charcoal/30">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link href={`/collections/${product.category}`} className="text-charcoal/50 hover:text-forest transition-colors">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="flex items-center gap-2 text-charcoal/30">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-charcoal truncate max-w-[200px]" aria-current="page">{product.name}</span>
            </li>
          </ol>
        </Container>
      </nav>

      {/* Product Detail */}
      <Section className="py-section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
            {/* Product Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-forest">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-serif text-8xl font-light tracking-tight opacity-30">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
                  </motion.div>
                </AnimatePresence>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge tone="forest">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Badge>
                </div>

                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge tone={product.badge === "New" ? "gold" : "forest"}>
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === selectedImage ? "true" : "false"}
                    className={cn(
                      "shrink-0 h-20 w-20 rounded-soft overflow-hidden border-2 transition-all duration-200",
                      index === selectedImage
                        ? "border-forest"
                        : "border-transparent hover:border-forest/30",
                    )}
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-serif text-2xl font-light text-forest/30">{product.name.charAt(0)}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Purchase Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >
              <div className="flex flex-col gap-6">
                {/* Category & Name */}
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/collections/${product.category}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline"
                  >
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Link>
                  <h1 className="text-h2 font-light text-charcoal">{product.name}</h1>
                  <p className="text-lede text-charcoal/70">{product.tagline}</p>
                </div>

                {/* Rating & Price */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-line">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                      <span className="font-medium text-charcoal">{product.rating.toFixed(1)}</span>
                      <span className="text-charcoal/50">({product.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-2xl text-charcoal">{formatPrice(product.price, product.currency)}</p>
                    <p className="text-sm text-charcoal/60">{product.form} &middot; {product.servings} servings</p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="flex flex-col gap-2 pt-2 border-t border-line">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-charcoal/50">Key benefits</h3>
                  <ul className="flex flex-col gap-1.5" role="list">
                    {product.keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-charcoal/70">
                        <Check className="h-4 w-4 shrink-0 text-forest mt-0.5" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Controls */}
                <div className="flex flex-col gap-4 pt-2 border-t border-line">
                  <QuantityStepper
                    value={1}
                    onChange={() => {}}
                    max={99}
                    className="w-full sm:w-48"
                  />

                  <button
                    type="button"
                    onClick={() => addItem(product.id, 1)}
                    disabled={!product.inStock}
                    className={cn(
                      "h-12 w-full rounded-full font-medium text-sm transition-colors",
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
                        <Check className="h-4 w-4" aria-hidden="true" />
                        Added to cart
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add to cart
                      </>
                    )}
                  </button>

                  {product.inStock ? (
                    <p className="text-xs text-forest/80 flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      In stock &mdash; ships within 1-2 business days
                    </p>
                  ) : (
                    <p className="text-xs text-danger/80 flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2-2l2 2m-2-2l-2 2" />
                      </svg>
                      Currently out of stock
                    </p>
                  )}
                </div>

                {/* Trust Signals */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-line">
                  <div className="flex items-center gap-2 text-sm text-charcoal/60">
                    <svg className="h-4 w-4 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span>Free shipping over $75</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/60">
                    <svg className="h-4 w-4 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>30-day returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/60">
                    <svg className="h-4 w-4 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Third-party tested</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Product Details Tabs */}
      <Section className="py-section-space bg-cream">
        <Container>
          <ProductDetailsTabs product={product} />
        </Container>
      </Section>

      {/* Related Products */}
      {(() => {
        const relatedProducts = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
        if (relatedProducts.length === 0) return null;

        return (
          <Section className="py-section-space">
            <Container>
              <div className="flex items-end justify-between gap-6 pb-10">
                <div className="flex flex-col gap-3">
                  <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                    You may also like
                  </span>
                  <h2 className="text-h1 font-light text-charcoal">
                    Related formulations
                  </h2>
                </div>
                <Link
                  href={`/collections/${product.category}`}
                  className="hidden shrink-0 text-sm font-medium text-forest underline underline-offset-4 sm:inline-flex items-center gap-1"
                >
                  View all
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.article
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <ProductCard product={relatedProduct} />
                  </motion.article>
                ))}
              </div>
            </Container>
          </Section>
        );
      })()}
    </>
  );
}

function ProductDetailsTabs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "ingredients", label: "Ingredients" },
    { id: "nutrition", label: "Supplement facts" },
    { id: "usage", label: "Usage & storage" },
    { id: "quality", label: "Quality" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab List */}
      <div className="flex flex-wrap gap-1 mb-8 border-b border-line" role="tablist" aria-label="Product details">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px",
              activeTab === tab.id
                ? "border-forest text-forest"
                : "border-transparent text-charcoal/50 hover:text-charcoal hover:border-forest/30",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="prose prose-charcoal max-w-none"
        >
          {activeTab === "overview" && (
            <div className="flex flex-col gap-6">
              <p className="text-lede text-charcoal/70">{product.description}</p>
              <p>{product.description}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-serif text-base text-charcoal mb-2">Form</h4>
                  <p className="text-sm text-charcoal/70">{product.form}</p>
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal mb-2">Servings</h4>
                  <p className="text-sm text-charcoal/70">{product.servings} servings per container</p>
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal mb-2">Category</h4>
                  <p className="text-sm text-charcoal/70 capitalize">{product.category}</p>
                </div>
                <div>
                  <h4 className="font-serif text-base text-charcoal mb-2">Price</h4>
                  <p className="text-sm text-charcoal/70">{formatPrice(product.price, product.currency)} per container</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="flex flex-col gap-6">
              <p className="text-lede text-charcoal/70">Complete ingredient transparency.</p>
              <div className="rounded-card border border-line bg-ivory p-6">
                <h4 className="font-serif text-base text-charcoal mb-3">Ingredients</h4>
                <p className="text-sm text-charcoal/70 whitespace-pre-line">{product.ingredients}</p>
              </div>
              <h4 className="font-serif text-base text-charcoal">Key benefits</h4>
              <ul className="flex flex-col gap-2" role="list">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <Check className="h-4 w-4 shrink-0 text-forest mt-0.5" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "nutrition" && (
            <div className="flex flex-col gap-6">
              <p className="text-lede text-charcoal/70">Supplement facts per serving.</p>
              <div className="rounded-card border border-line bg-ivory p-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="text-left py-2 font-medium text-charcoal">Ingredient</th>
                      <th className="text-right py-2 font-medium text-charcoal">Amount per serving</th>
                      <th className="text-right py-2 font-medium text-charcoal">% Daily Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-line/50">
                      <td className="py-2 text-charcoal">NMN (&beta;-Nicotinamide mononucleotide)</td>
                      <td className="py-2 text-right text-charcoal">500 mg</td>
                      <td className="py-2 text-right text-charcoal/50">&dagger;</td>
                    </tr>
                    <tr className="border-b border-line/50">
                      <td className="py-2 text-charcoal">Trans-resveratrol</td>
                      <td className="py-2 text-right text-charcoal">150 mg</td>
                      <td className="py-2 text-right text-charcoal/50">&dagger;</td>
                    </tr>
                    <tr className="border-b border-line/50">
                      <td className="py-2 text-charcoal">CoQ10 (as ubiquinone)</td>
                      <td className="py-2 text-right text-charcoal">100 mg</td>
                      <td className="py-2 text-right text-charcoal/50">&dagger;</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-charcoal">BioPerine&reg; (black pepper extract)</td>
                      <td className="py-2 text-right text-charcoal">5 mg</td>
                      <td className="py-2 text-right text-charcoal/50">&dagger;</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 text-xs text-charcoal/50">&dagger; Daily Value not established.</p>
              </div>
              <p className="text-xs text-charcoal/50">* Nutritional information varies by product. The table above is illustrative for the Verdant Longevity Complex.</p>
            </div>
          )}

          {activeTab === "usage" && (
            <div className="flex flex-col gap-6">
              <p className="text-lede text-charcoal/70">How to get the most from your formulation.</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-card border border-line bg-ivory p-5">
                  <h4 className="font-serif text-base text-charcoal mb-2 flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-forest" aria-hidden="true" />
                    Suggested use
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-sm text-charcoal/70">
                    <li>&bull; Take 2 capsules daily with food, or as directed by your healthcare practitioner.</li>
                    <li>&bull; For best results, take consistently at the same time each day.</li>
                    <li>&bull; Do not exceed the recommended daily dose.</li>
                  </ul>
                </div>
                <div className="rounded-card border border-line bg-ivory p-5">
                  <h4 className="font-serif text-base text-charcoal mb-2 flex items-center gap-2">
                    <svg className="h-4 w-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    Storage
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-sm text-charcoal/70">
                    <li>&bull; Store in a cool, dry place away from direct sunlight.</li>
                    <li>&bull; Keep container tightly closed when not in use.</li>
                    <li>&bull; Keep out of reach of children.</li>
                  </ul>
                </div>
                <div className="rounded-card border border-line bg-ivory p-5">
                  <h4 className="font-serif text-base text-charcoal mb-2 flex items-center gap-2">
                    <svg className="h-4 w-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Shelf life
                  </h4>
                  <p className="text-sm text-charcoal/70">Best used within 24 months of manufacture date. See bottom of bottle for lot number and expiration.</p>
                </div>
                <div className="rounded-card border border-line bg-ivory p-5">
                  <h4 className="font-serif text-base text-charcoal mb-2 flex items-center gap-2">
                    <svg className="h-4 w-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2-2m-2 2l2 2m-2-2l-2 2" />
                    </svg>
                    Cautions
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-sm text-charcoal/70">
                    <li>&bull; Consult your healthcare practitioner before use if pregnant, nursing, taking medication, or have a medical condition.</li>
                    <li>&bull; Discontinue use and consult a healthcare professional if adverse reactions occur.</li>
                    <li>&bull; Not intended for persons under 18 years of age.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "quality" && (
            <div className="flex flex-col gap-6">
              <p className="text-lede text-charcoal/70">Our commitment to transparency and verification.</p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Third-party testing",
                    description: "Every batch is tested by accredited independent laboratories for identity, purity, potency, and contaminants including heavy metals, microbes, and pesticides.",
                  },
                  {
                    title: "Ingredient traceability",
                    description: "We source from qualified suppliers with documented chains of custody. Each ingredient can be traced to its origin.",
                  },
                  {
                    title: "cGMP manufacturing",
                    description: "Produced in facilities registered with and inspected by regulatory authorities, following current Good Manufacturing Practices.",
                  },
                  {
                    title: "Certificate of Analysis",
                    description: "Batch-specific Certificates of Analysis are available upon request, documenting test results for your specific product.",
                  },
                ].map((item, index) => (
                  <div key={index} className="rounded-card border border-line bg-ivory p-5">
                    <h4 className="font-serif text-base text-charcoal mb-2">{item.title}</h4>
                    <p className="text-sm text-charcoal/70">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-card border border-line bg-cream p-5">
                <p className="text-sm text-charcoal/70">
                  <strong>Note:</strong> The quality information above represents our standards and commitments. Specific certifications, laboratory partners, and test results for individual products should be verified with the client&apos;s actual documentation.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}