"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, X, ChevronRight, Tag } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Section, Container } from "@/components/ui/section";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";

const allArticles = [
  { slug: "reading-supplement-labels", title: "How to read a supplement label", category: "Education", type: "article" },
  { slug: "magnesium-forms-compared", title: "Magnesium glycinate vs citrate vs threonate", category: "Ingredients", type: "article" },
  { slug: "nad-precursors-explained", title: "NMN, NR, and NAD+ precursors", category: "Science", type: "article" },
  { slug: "adaptogens-guide", title: "Understanding adaptogens", category: "Ingredients", type: "article" },
  { slug: "supplement-storage", title: "Supplement storage and shelf life", category: "Education", type: "article" },
  { slug: "third-party-testing-explained", title: "What third-party testing actually means", category: "Science", type: "article" },
  { slug: "vitamin-d3-k2-synergy", title: "Why vitamin D3 and K2 work better together", category: "Ingredients", type: "article" },
  { slug: "probiotic-strain-specificity", title: "Not all probiotics are created equal", category: "Science", type: "article" },
];

export default function SearchClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 150);
    return () => clearTimeout(timer);
  }, [query]);

  const productResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return products.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.keyBenefits.some((b) => b.toLowerCase().includes(q)) ||
      p.ingredients.toLowerCase().includes(q)
    );
  }, [debouncedQuery]);

  const articleResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return allArticles.filter((a) =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );
  }, [debouncedQuery]);

  const categoryResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return categories.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    );
  }, [debouncedQuery]);

  const hasResults = productResults.length > 0 || articleResults.length > 0 || categoryResults.length > 0;

  const clearSearch = () => {
    window.history.replaceState({}, "", "/search");
  };

  return (
    <>
      {/* Search Hero */}
      <section className="relative py-section-space lg:py-[8rem] overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="relative max-w-2xl mx-auto">
              <label htmlFor="search-input" className="sr-only">Search</label>
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-charcoal/40" aria-hidden="true" />
                <input
                  id="search-input"
                  type="search"
                  defaultValue={query}
                  placeholder="Search products, articles, categories..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const value = e.currentTarget.value.trim();
                      if (value) router.push(`/search?q=${encodeURIComponent(value)}`);
                    }
                  }}
                  onChange={(e) => {
                    const value = e.target.value.trim();
                    window.history.replaceState({}, "", value ? `/search?q=${encodeURIComponent(value)}` : "/search");
                  }}
                  className="w-full h-14 rounded-full border border-line bg-cream pl-14 pr-14 text-base text-charcoal placeholder:text-charcoal/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-forest transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {query && (
              <p className="mt-6 text-lede text-charcoal/70 text-center">
                Showing results for <span className="font-medium text-charcoal">&ldquo;{query}&rdquo;</span>
                {hasResults ? (
                  <span className="ml-2 text-charcoal/50">
                    — {productResults.length + articleResults.length + categoryResults.length} result{productResults.length + articleResults.length + categoryResults.length !== 1 ? "s" : ""}
                  </span>
                ) : (
                  <span className="ml-2 text-charcoal/50">— no results found</span>
                )}
              </p>
            )}
          </motion.div>
        </Container>
      </section>

      {/* Results */}
      {query && (
        <Section className="py-section-space">
          <Container>
            {/* Products */}
            {productResults.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between gap-4 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center">
                      <svg className="h-4 w-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m16 0l-8 4m0 0l8 4m0 0v10" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-xl text-charcoal">Products</h2>
                    <span className="text-sm text-charcoal/50">{productResults.length} result{productResults.length !== 1 ? "s" : ""}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {productResults.slice(0, 8).map((product, index) => (
                    <motion.article
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Link href={`/products/${product.slug}`} className="block">
                        <motion.div
                          whileHover={{ y: -4, boxShadow: "0 12px 32px -12px rgba(36, 59, 47, 0.2)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="rounded-card border border-line bg-ivory overflow-hidden"
                        >
                          <div className="aspect-[4/5] bg-forest relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-serif text-4xl font-light opacity-20">{product.name.charAt(0)}</span>
                            </div>
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
                            {product.badge && (
                              <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-[0.625rem] font-medium uppercase tracking-[0.1em] bg-forest/90 text-ivory">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <div className="p-4 flex flex-col gap-2">
                            <Link href={`/collections/${product.category}`} className="text-micro font-medium text-forest hover:underline">
                              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </Link>
                            <h3 className="font-serif text-base text-charcoal">{product.name}</h3>
                            <p className="text-sm text-charcoal/60">{product.tagline}</p>
                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-line/50">
                              <p className="font-serif text-lg text-charcoal">{product.price}</p>
                              <span className="text-sm font-medium text-forest hover:underline">View details</span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
                {productResults.length > 8 && (
                  <div className="mt-8 text-center">
                    <Link
                      href={`/collections?search=${encodeURIComponent(query)}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-forest/30 text-forest hover:bg-forest/5 transition-colors"
                    >
                      View all {productResults.length} products
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                )}
              </motion.section>
            )}

            {/* Articles */}
            {articleResults.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-12"
              >
                <div className="flex items-center justify-between gap-4 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center">
                      <svg className="h-4 w-4 text-forest" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 17H20" />
                        <path d="M6.5 17H20" />
                        <path d="M12 17v-5" />
                        <path d="M12 12H8" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-xl text-charcoal">Articles</h2>
                    <span className="text-sm text-charcoal/50">{articleResults.length} result{articleResults.length !== 1 ? "s" : ""}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articleResults.map((article, index) => (
                    <motion.article
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Link href={`/journal/${article.slug}`} className="block">
                        <div className="rounded-card border border-line bg-ivory overflow-hidden hover:border-forest/30 transition-colors">
                          <div className="aspect-[16/10] bg-forest relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="font-serif text-4xl font-light opacity-20">{article.title.charAt(0)}</span>
                            </div>
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
                          </div>
                          <div className="p-4 flex flex-col gap-2">
                            <span className="text-micro font-medium text-forest">{article.category}</span>
                            <h3 className="font-serif text-base text-charcoal">{article.title}</h3>
                            <span className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1 mt-auto">
                              Read article
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Categories */}
            {categoryResults.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-12"
              >
                <div className="flex items-center justify-between gap-4 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center">
                      <Tag className="h-4 w-4 text-forest" aria-hidden="true" />
                    </div>
                    <h2 className="font-serif text-xl text-charcoal">Categories</h2>
                    <span className="text-sm text-charcoal/50">{categoryResults.length} result{categoryResults.length !== 1 ? "s" : ""}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryResults.map((cat, index) => (
                    <motion.article
                      key={cat.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      onClick={() => router.push(`/collections/${cat.slug}`)}
                      className="group flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory cursor-pointer hover:border-forest/30 hover:shadow-card-hover transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors">{cat.name}</h3>
                          <p className="mt-1 text-small text-charcoal/70">{cat.tagline}</p>
                        </div>
                        <div className="shrink-0 w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                          <cat.icon className="h-5 w-5 text-forest" aria-hidden="true" />
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
              </motion.section>
            )}

            {/* No Results */}
            {!hasResults && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-6 py-20 text-center"
              >
                <p className="text-charcoal/60 max-w-sm">No results found for <span className="font-medium text-charcoal">&ldquo;{query}&rdquo;</span>.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/collections"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-forest text-ivory px-5 text-sm font-medium tracking-tight transition-colors hover:bg-forest-deep"
                  >
                    Browse all products
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/journal"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-forest/30 text-forest hover:bg-forest/5 transition-colors px-5 text-sm font-medium"
                  >
                    Browse journal
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            )}
          </Container>
        </Section>
      )}
    </>
  );
}