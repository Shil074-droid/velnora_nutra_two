"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/product/product-card";
import { ButtonLink } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/section";
import { getProductsByCategory } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);

  if (!category) {
    return (
      <Section className="py-section-space">
        <Container className="flex flex-col items-center gap-6 py-20 text-center">
          <h1 className="text-h1 font-light text-charcoal">Category not found</h1>
          <p className="text-charcoal/60 max-w-sm">The category you're looking for doesn't exist.</p>
          <ButtonLink href="/collections">
            Browse all collections
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
    );
  }

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
            <Link
              href="/collections"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline mb-4"
            >
              <span>All collections</span>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Collection
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              {category.name}
            </h1>
            <p className="mt-4 text-lede text-charcoal/70">{category.description}</p>
          </motion.div>
        </Container>
      </section>

      {/* Product Grid */}
      <Section className="py-section-space">
        <Container>
          <p className="mb-6 text-sm text-charcoal/60">
            <span className="font-medium text-charcoal">{categoryProducts.length}</span> product{categoryProducts.length !== 1 ? "s" : ""} in this collection
          </p>

          {categoryProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6 py-20 text-center"
            >
              <p className="text-charcoal/60 max-w-sm">No products in this collection yet.</p>
              <ButtonLink href="/collections" variant="outline">
                Browse all collections
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {categoryProducts.map((product, index) => (
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
      </Section>

      {/* Related Categories */}
      <Section className="py-section-space bg-cream">
        <Container>
          <div className="flex flex-col items-start gap-6 pb-10 max-w-3xl">
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Explore more
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Other collections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories
              .filter((c) => c.slug !== slug)
              .map((cat, index) => (
                <motion.article
                  key={cat.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  onClick={() => window.location.href = `/collections/${cat.slug}`}
                  className="group relative flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory cursor-pointer hover:border-forest/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-small text-charcoal/70">{cat.tagline}</p>
                    </div>
                    <div className="shrink-0 w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                      <cat.icon className="h-6 w-6 text-forest" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-sm text-charcoal/60">{cat.description}</p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-forest group-hover:gap-2 transition-colors">
                    View collection
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </motion.article>
              ))}
          </div>
        </Container>
      </Section>
    </>
  );
}