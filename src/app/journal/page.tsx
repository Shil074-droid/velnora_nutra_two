"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, BookOpen, Clock, Tag } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { slug: "all", label: "All articles" },
  { slug: "education", label: "Education" },
  { slug: "ingredients", label: "Ingredients" },
  { slug: "science", label: "Science" },
  { slug: "wellness", label: "Wellness" },
];

const articles = [
  {
    slug: "reading-supplement-labels",
    title: "How to read a supplement label",
    excerpt: "Understanding ingredient forms, dosages, and what matters for efficacy. A practical guide to interpreting any supplement facts panel.",
    category: "Education",
    readTime: "6 min",
    image: null,
  },
  {
    slug: "magnesium-forms-compared",
    title: "Magnesium glycinate vs citrate vs threonate",
    excerpt: "A practical guide to choosing the right form for your needs. Understanding absorption, tolerability, and specific use cases.",
    category: "Ingredients",
    readTime: "8 min",
    image: null,
  },
  {
    slug: "nad-precursors-explained",
    title: "NMN, NR, and NAD+ precursors",
    excerpt: "The science behind cellular energy support and healthy ageing. Comparing the evidence for different NAD+ boosting compounds.",
    category: "Science",
    readTime: "10 min",
    image: null,
  },
  {
    slug: "adaptogens-guide",
    title: "Understanding adaptogens: ashwagandha, rhodiola, and more",
    excerpt: "What adaptogens are, how they work, and how to choose the right one for stress support, energy, or cognitive function.",
    category: "Ingredients",
    readTime: "7 min",
    image: null,
  },
  {
    slug: "supplement-storage",
    title: "Supplement storage and shelf life",
    excerpt: "How to preserve potency, when to discard, and what affects supplement stability over time. Practical tips for every cabinet.",
    category: "Education",
    readTime: "5 min",
    image: null,
  },
  {
    slug: "third-party-testing-explained",
    title: "What third-party testing actually means",
    excerpt: "Understanding Certificates of Analysis, testing methodologies, and how to verify a brand's quality claims.",
    category: "Science",
    readTime: "9 min",
    image: null,
  },
  {
    slug: "vitamin-d3-k2-synergy",
    title: "Why vitamin D3 and K2 work better together",
    excerpt: "The synergistic relationship between these nutrients for bone and cardiovascular health. Dosage considerations and forms.",
    category: "Ingredients",
    readTime: "6 min",
    image: null,
  },
  {
    slug: "probiotic-strain-specificity",
    title: "Not all probiotics are created equal",
    excerpt: "Why strain specificity matters, what CFU counts actually tell you, and how to choose a probiotic for your specific needs.",
    category: "Science",
    readTime: "8 min",
    image: null,
  },
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.category.toLowerCase() === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative py-section-space lg:py-[8rem] overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Journal
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              Ideas worth exploring
            </h1>
            <p className="mt-6 text-lede text-charcoal/70 max-w-2xl">
              Evidence-based articles on ingredients, formulation science, and practical guidance for making informed nutrition choices.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="border-y border-line bg-ivory">
        <Container className="py-4">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Article categories">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === cat.slug
                    ? "bg-forest text-ivory"
                    : "bg-cream text-charcoal/70 hover:bg-forest/5 hover:text-forest",
                )}
                aria-pressed={activeCategory === cat.slug}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={activeCategory}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col gap-4 rounded-card border border-line bg-ivory overflow-hidden hover:border-forest/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <Link href={`/journal/${article.slug}`} className="block">
                    <div className="aspect-[16/10] bg-forest relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-6xl font-light opacity-20">
                          {article.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/journal?category=${article.category.toLowerCase()}`} className="text-micro font-medium text-forest hover:underline">
                        {article.category}
                      </Link>
                      <span className="text-micro text-charcoal/40">{article.readTime}</span>
                    </div>
                    <Link href={`/journal/${article.slug}`}>
                      <h3 className="font-serif text-lg text-charcoal hover:text-forest transition-colors">{article.title}</h3>
                    </Link>
                    <p className="text-small text-charcoal/70">{article.excerpt}</p>
                    <Link href={`/journal/${article.slug}`} className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1 mt-auto">
                      Read article
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 py-20 text-center"
            >
              <p className="text-charcoal/60 max-w-sm">No articles in this category yet.</p>
              <Button variant="outline" onClick={() => setActiveCategory("all")}>
                View all articles
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          )}

          {/* Load More */}
          <div className="mt-10 text-center">
            <ButtonLink variant="outline" href="/journal?load=more">
              Load more articles
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 rounded-[1.5rem] bg-forest px-8 py-16 text-center max-w-3xl mx-auto"
          >
            <BookOpen className="h-6 w-6 text-sage" aria-hidden="true" />
            <h2 className="text-h2 font-light text-ivory max-w-xl">
              Get articles delivered to your inbox
            </h2>
            <p className="text-lede text-ivory/70 max-w-prose">
              No spam, just thoughtful nutrition science and ingredient deep-dives.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => { e.preventDefault(); alert("Demo: Newsletter signup not connected"); }}>
              <label htmlFor="journal-email" className="sr-only">Email address</label>
              <input
                id="journal-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 h-11 rounded-full border border-ivory/20 bg-ivory/5 px-4 text-sm text-ivory placeholder:text-ivory/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory"
              />
              <Button type="submit" size="lg">
                Subscribe
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
            <p className="text-xs text-ivory/50">
              By subscribing, you agree to our Privacy Policy. This is a design demo — no data is collected.
            </p>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}