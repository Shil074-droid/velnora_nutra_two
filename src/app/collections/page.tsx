"use client";

export const dynamic = "force-dynamic";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Filter, X, ChevronDown } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

import { ProductCard } from "@/components/product/product-card";
import { ButtonLink, Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section, Container } from "@/components/ui/section";
import { products, getProductsByCategory, featuredProducts } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc" | "newest";

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = selectedCategory
      ? getProductsByCategory(selectedCategory)
      : products;

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        result = [...result].sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
        break;
      case "featured":
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug === selectedCategory ? null : slug);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSortBy("featured");
  };

  const hasActiveFilters = selectedCategory !== null || sortBy !== "featured";

  return (
    <>
      {/* Page Header */}
      <section className="relative py-section-space-sm lg:py-section-space overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Shop
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              All formulations
            </h1>
            <p className="mt-4 text-lede text-charcoal/70">
              Our complete range of science-led nutraceuticals. Filter by category or sort to find what you need.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filters & Toolbar */}
      <section className="border-y border-line bg-ivory">
        <Container className="py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Product categories">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  selectedCategory === null
                    ? "bg-forest text-ivory"
                    : "bg-cream text-charcoal/70 hover:bg-forest/5 hover:text-forest",
                )}
                aria-pressed={selectedCategory === null}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedCategory === cat.slug
                      ? "bg-forest text-ivory"
                      : "bg-cream text-charcoal/70 hover:bg-forest/5 hover:text-forest",
                  )}
                  aria-pressed={selectedCategory === cat.slug}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort & Actions */}
            <div className="flex flex-wrap items-center gap-3 lg:ml-auto">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-charcoal/60 hover:text-danger transition-colors"
                  aria-label="Clear all filters"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                  Clear filters
                </button>
              )}

              <div className="relative" role="group" aria-label="Sort products">
                <label htmlFor="sort-select" className="sr-only">Sort by</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none h-10 rounded-full border border-line bg-cream px-4 pr-10 text-sm text-charcoal focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to high</option>
                  <option value="price-desc">Price: High to low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40 pointer-events-none" aria-hidden="true" />
              </div>

              {/* Mobile filter toggle */}
              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-cream text-sm font-medium text-charcoal/70 hover:bg-forest/5 hover:text-forest transition-colors"
                aria-expanded={showFilters}
              >
                <Filter className="h-4 w-4" aria-hidden="true" />
                Filters
              </button>
            </div>
          </div>

          {/* Mobile filter drawer */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Product categories">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedCategory === null
                      ? "bg-forest text-ivory"
                      : "bg-cream text-charcoal/70 hover:bg-forest/5 hover:text-forest",
                  )}
                  aria-pressed={selectedCategory === null}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => handleCategoryClick(cat.slug)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      selectedCategory === cat.slug
                        ? "bg-forest text-ivory"
                        : "bg-cream text-charcoal/70 hover:bg-forest/5 hover:text-forest",
                    )}
                    aria-pressed={selectedCategory === cat.slug}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Product Grid */}
      <section className="py-section-space">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-charcoal/60">
              Showing <span className="font-medium text-charcoal">{filteredProducts.length}</span> of{" "}
              <span className="font-medium text-charcoal">{products.length}</span> products
            </p>
            {selectedCategory && (
              <Badge tone="forest" className="flex items-center gap-1.5">
                Filtered by {categories.find((c) => c.slug === selectedCategory)?.name}
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="ml-1 p-0.5 rounded hover:bg-forest/20"
                  aria-label="Remove category filter"
                >
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              </Badge>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6 py-20 text-center"
            >
              <p className="text-charcoal/60 max-w-sm">No products match your current filters.</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.article
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <ProductCard product={product} />
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Category Overview - only show when no filter active */}
      {!selectedCategory && (
        <Section className="py-section-space bg-cream">
          <Container>
            <div className="flex flex-col items-start gap-6 pb-10 max-w-3xl">
              <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                Browse by category
              </span>
              <h2 className="text-h1 font-light text-charcoal">
                Find what you're looking for
              </h2>
              <p className="text-lede text-charcoal/70">
                Each collection is formulated around a specific wellness goal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.article
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  onClick={() => window.location.href = `/collections/${category.slug}`}
                  className="group relative flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory cursor-pointer hover:border-forest/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-small text-charcoal/70">{category.tagline}</p>
                    </div>
                    <div className="shrink-0 w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                      <category.icon className="h-6 w-6 text-forest" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-sm text-charcoal/60">{category.description}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-forest group-hover:gap-2 transition-colors">
                    View collection
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 rounded-[1.5rem] bg-forest px-8 py-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h2 font-light text-ivory max-w-xl">
              Not sure where to start?
            </h2>
            <p className="text-lede text-ivory/70 max-w-prose">
              Take a moment to explore our approach to formulation, or read about the science behind our ingredients.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/our-approach" variant="secondary" size="lg">
                Our approach
              </ButtonLink>
              <ButtonLink href="/journal" variant="outline" size="lg" className="border-ivory/20 text-ivory hover:bg-ivory/10">
                Read the journal
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}