"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Leaf, FlaskConical, Recycle, Sparkles, ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink, Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/section";
import { featuredProducts } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: FlaskConical,
    title: "Science-led",
    body: "Every formula is grounded in peer-reviewed research and third-party testing.",
  },
  {
    icon: Leaf,
    title: "Clean ingredients",
    body: "Traceable, responsibly sourced actives with no unnecessary fillers.",
  },
  {
    icon: Recycle,
    title: "Considered packaging",
    body: "Recyclable materials and a refill programme designed to reduce waste.",
  },
];

const approachPrinciples = [
  {
    title: "Ingredient transparency",
    description: "Every component is disclosed with its purpose, source, and form. No proprietary blends that hide dosages.",
  },
  {
    title: "Therapeutic dosing",
    description: "We use amounts supported by clinical research, not token quantities for label claims.",
  },
  {
    title: "Rigorous verification",
    description: "Identity, purity, and potency confirmed by accredited third-party laboratories for every batch.",
  },
  {
    title: "Sustainable sourcing",
    description: "Ingredients selected for environmental responsibility and supply-chain traceability.",
  },
];

const journalArticles = [
  {
    slug: "reading-supplement-labels",
    title: "How to read a supplement label",
    excerpt: "Understanding ingredient forms, dosages, and what matters for efficacy.",
    category: "Education",
    readTime: "6 min",
  },
  {
    slug: "magnesium-forms-compared",
    title: "Magnesium glycinate vs citrate vs threonate",
    excerpt: "A practical guide to choosing the right form for your needs.",
    category: "Ingredients",
    readTime: "8 min",
  },
  {
    slug: "nad-precursors-explained",
    title: "NMN, NR, and NAD+ precursors",
    excerpt: "The science behind cellular energy support and healthy ageing.",
    category: "Science",
    readTime: "10 min",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-section-space lg:py-[10rem]">
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-end"
          >
            {/* Hero Content */}
            <div className="flex flex-col items-start gap-8 max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/5 text-forest text-micro font-medium uppercase tracking-[0.14em]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-forest"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
                New collection — Cellular vitality
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-display font-light text-charcoal leading-[1.0]"
              >
                Nutrition,{" "}
                <span className="italic text-forest">considered</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lede text-charcoal/70 max-w-xl"
              >
                Premium, science-led formulations that support energy, immunity, and longevity — made with clean ingredients and a respect for the natural world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <ButtonLink size="lg" href="/collections">
                  Explore the collection
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink size="lg" variant="outline" href="/our-approach">
                  Our approach
                </ButtonLink>
              </motion.div>
            </div>

            {/* Hero Visual - Editorial Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-forest">
                {/* Main hero image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-serif text-8xl font-light tracking-tight opacity-20">
                      V
                    </span>
                    <p className="mt-4 text-sm text-ivory/50 uppercase tracking-[0.2em]">Product imagery</p>
                    <p className="text-xs text-ivory/30">Hero campaign photograph</p>
                  </div>
                </div>

                {/* Botanical accent elements */}
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border border-ivory/20" aria-hidden="true" />
                <div className="absolute -top-2 -right-2 h-20 w-20 rounded-full border border-ivory/10" aria-hidden="true" />
                <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full bg-ivory/5" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 h-10 w-10 rounded-full bg-ivory/5" aria-hidden="true" />

                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
              </div>

              {/* Floating product cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-4 lg:hidden"
              >
                {featuredProducts.slice(0, 3).map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="flex h-20 w-36 items-end rounded-soft bg-cream p-3 shadow-card hover:shadow-card-hover transition-shadow"
                    aria-label={`View ${product.name}`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-3xl font-light text-forest/50">{product.name.charAt(0)}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>

              {/* Desktop floating product showcase */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="hidden lg:absolute -bottom-10 -right-10 flex gap-4"
              >
                {featuredProducts.slice(0, 2).map((product, index) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className={cn(
                      "flex h-28 w-44 items-end rounded-soft bg-cream p-4 shadow-card hover:shadow-card-hover transition-all duration-300",
                      index === 0 && "-translate-y-2",
                    )}
                    aria-label={`View ${product.name}`}
                  >
                    <div className="w-full h-full flex flex-col items-end justify-end gap-2">
                      <span className="font-serif text-4xl font-light text-forest/40">{product.name.charAt(0)}</span>
                      <span className="text-micro font-medium text-charcoal/60 text-right">{product.name}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Brand Introduction */}
      <Section className="py-section-space bg-cream">
        <Container className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-block text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Our philosophy
            </span>
            <h2 className="text-h1 font-light text-charcoal max-w-xl">
              Nature, understood. Nutrition, considered.
            </h2>
            <p className="text-lede text-charcoal/70 max-w-prose">
              We believe that effective nutrition starts with clarity. Every ingredient in our formulations has a defined purpose, a known source, and a dosage supported by research. No proprietary blends. No hidden fillers. Just thoughtful nutrition you can trust.
            </p>
            <ButtonLink href="/our-approach" variant="outline">
              Read our approach
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-forest"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-serif text-8xl font-light tracking-tight opacity-20">
                  N
                </span>
                <p className="mt-4 text-sm text-ivory/50 uppercase tracking-[0.2em]">Botanical imagery</p>
                <p className="text-xs text-ivory/30">Ingredient sourcing photograph</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
          </motion.div>
        </Container>
      </Section>

      {/* Featured Collection */}
      <Section className="py-section-space">
        <div className="flex items-end justify-between gap-6 pb-10">
          <div className="flex flex-col gap-3">
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Featured formulations
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Formulations to begin with
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden shrink-0 text-sm font-medium text-forest underline underline-offset-4 sm:inline-flex items-center gap-1"
          >
            View all
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProductCard product={product} />
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <ButtonLink variant="outline" href="/collections">
            View all products
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      {/* Ingredient Story */}
      <Section className="py-section-space bg-mist">
        <Container className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-forest"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-serif text-8xl font-light tracking-tight opacity-20">
                  M
                </span>
                <p className="mt-4 text-sm text-ivory/50 uppercase tracking-[0.2em]">Ingredient photography</p>
                <p className="text-xs text-ivory/30">Macro detail — NMN crystalline structure</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <Badge tone="gold">Ingredient spotlight</Badge>
            <h2 className="text-h1 font-light text-charcoal">
              The science behind NMN
            </h2>
            <div className="flex flex-col gap-4 text-charcoal/70">
              <p className="text-lede">
                Nicotinamide mononucleotide (NMN) is a direct precursor to NAD+, a coenzyme essential for cellular energy production and DNA repair.
              </p>
              <p>
                NAD+ levels decline naturally with age, contributing to reduced mitochondrial function and cellular resilience. Supplementing with NMN supports the body&apos;s natural NAD+ biosynthesis pathway, helping maintain cellular vitality over time.
              </p>
              <p>
                Our Verdant Longevity Complex delivers 500 mg of high-purity NMN per serving, combined with trans-resveratrol and CoQ10 for synergistic mitochondrial support.
              </p>
            </div>
            <ButtonLink href="/products/verdant-longevity-complex" variant="outline">
              View formulation details
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </motion.div>
        </Container>
      </Section>

      {/* The Velnora Approach */}
      <Section className="py-section-space">
        <div className="flex flex-col items-start gap-6 pb-10 max-w-3xl">
          <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
            Our standards
          </span>
          <h2 className="text-h1 font-light text-charcoal">
            The Velnora approach
          </h2>
          <p className="text-lede text-charcoal/70">
            Four principles that guide every formulation we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachPrinciples.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col gap-3 p-6 rounded-card border border-line bg-cream hover:border-forest/30 transition-colors"
            >
              <h3 className="font-serif text-lg text-charcoal">{principle.title}</h3>
              <p className="text-small text-charcoal/70">{principle.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/our-approach" variant="outline">
            Explore our standards in depth
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      {/* Product Education */}
      <Section className="py-section-space bg-cream">
        <Container>
          <div className="flex flex-col items-start gap-6 pb-10 max-w-3xl">
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Knowledge
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Making informed choices
            </h2>
            <p className="text-lede text-charcoal/70">
              Practical guidance to help you understand what you&apos;re taking and why it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory"
            >
              <h3 className="font-serif text-lg text-charcoal">Understanding ingredient forms</h3>
              <p className="text-small text-charcoal/70">Why magnesium glycinate differs from citrate, and how to choose the right form for your needs.</p>
              <Link href="/journal/magnesium-forms-compared" className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1">
                Read more
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory"
            >
              <h3 className="font-serif text-lg text-charcoal">Reading supplement facts panels</h3>
              <p className="text-small text-charcoal/70">A practical guide to interpreting dosages, daily values, and ingredient listings on any label.</p>
              <Link href="/journal/reading-supplement-labels" className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1">
                Read more
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory"
            >
              <h3 className="font-serif text-lg text-charcoal">Storage and shelf life</h3>
              <p className="text-small text-charcoal/70">How to preserve potency, when to discard, and what affects supplement stability over time.</p>
              <Link href="/journal/supplement-storage" className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1">
                Read more
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </motion.article>
          </div>
        </Container>
      </Section>

      {/* Journal */}
      <Section className="py-section-space">
        <div className="flex items-end justify-between gap-6 pb-10">
          <div className="flex flex-col gap-3">
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Journal
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Ideas worth exploring
            </h2>
          </div>
          <Link
            href="/journal"
            className="hidden shrink-0 text-sm font-medium text-forest underline underline-offset-4 sm:inline-flex items-center gap-1"
          >
            View all
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journalArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col gap-4 rounded-card border border-line bg-ivory overflow-hidden hover:border-forest/30 transition-colors"
            >
              <div className="aspect-[16/10] bg-forest relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl font-light opacity-20">
                    {article.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-50" aria-hidden="true" />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-micro font-medium text-forest">{article.category}</span>
                  <span className="text-micro text-charcoal/40">{article.readTime}</span>
                </div>
                <h3 className="font-serif text-lg text-charcoal">{article.title}</h3>
                <p className="text-small text-charcoal/70">{article.excerpt}</p>
                <Link href={`/journal/${article.slug}`} className="text-sm font-medium text-forest hover:underline inline-flex items-center gap-1 mt-auto">
                  Read article
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/journal" variant="outline">
            Browse all articles
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      {/* Brand Story */}
      <Section className="py-section-space bg-mist">
        <Container className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-forest"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-serif text-8xl font-light tracking-tight opacity-20">
                  V
                </span>
                <p className="mt-4 text-sm text-ivory/50 uppercase tracking-[0.2em]">Brand imagery</p>
                <p className="text-xs text-ivory/30">Laboratory or sourcing photograph</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%22')] opacity-50" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <Badge tone="gold">Our story</Badge>
            <h2 className="text-h1 font-light text-charcoal">
              Founded on a simple question
            </h2>
            <div className="flex flex-col gap-4 text-charcoal/70">
              <p className="text-lede">
                Why is it so difficult to know what&apos;s actually in a supplement, and whether the amounts matter?
              </p>
              <p>
                Velnora Nutra began with that question. We found an industry built on proprietary blends, borrowed science, and marketing ahead of substance. We chose a different path: complete ingredient transparency, therapeutic dosing, and independent verification for every batch.
              </p>
              <p>
                Today, we work with researchers, suppliers, and manufacturing partners who share our commitment to clarity. The result is a curated range of formulations that do what they say, with nothing left unclear.
              </p>
            </div>
            <ButtonLink href="/our-story" variant="outline">
              Read the full story
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </motion.div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 rounded-[1.5rem] bg-forest px-8 py-16 text-center max-w-3xl mx-auto"
          >
            <Sparkles className="h-6 w-6 text-sage" aria-hidden="true" />
            <h2 className="text-h2 font-light text-ivory max-w-xl">
              A quieter approach to wellbeing
            </h2>
            <p className="text-lede text-ivory/70 max-w-prose">
              No hype, no shortcuts — just thoughtful formulations and honest guidance. Join our newsletter for ingredient deep-dives, formulation updates, and early access to new releases.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => { e.preventDefault(); alert("Demo: Newsletter signup not connected"); }}>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
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