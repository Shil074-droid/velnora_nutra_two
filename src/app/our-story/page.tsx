"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Leaf, FlaskConical, Shield, Users, Target, BookOpen } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2022",
    title: "The question",
    description: "Founder Sarah Chen asks why it's so difficult to know what's actually in a supplement and whether the amounts matter. Research reveals an industry built on proprietary blends and borrowed science.",
  },
  {
    year: "2023",
    title: "Research & development",
    description: "Eighteen months of formulation work with researchers and manufacturing partners. Establishing the four pillars: transparency, therapeutic dosing, verification, and sustainability.",
  },
  {
    year: "2024",
    title: "First formulations",
    description: "Launch of the inaugural collection: five formulations targeting longevity, immunity, cognition, vitality, and digestive health. Each batch independently tested.",
  },
  {
    year: "2025",
    title: "Expansion & refinement",
    description: "Added beauty and sleep formulations. Introduced Certificate of Analysis program for batch-level transparency. Began international shipping to select markets.",
  },
];

const teamValues = [
  {
    icon: Target,
    title: "Purpose over profit",
    description: "Every decision is evaluated against our mission: clarity in nutrition. If it doesn't serve the customer's understanding, we don't do it.",
  },
  {
    icon: BookOpen,
    title: "Science over marketing",
    description: "Our formulations follow the evidence. We don't chase trends or include ingredients because they're popular on social media.",
  },
  {
    icon: Users,
    title: "People over metrics",
    description: "We measure success by the trust people place in us, not just revenue. Long-term relationships matter more than short-term conversions.",
  },
  {
    icon: Leaf,
    title: "Planet over convenience",
    description: "Sustainable sourcing and recyclable packaging aren't optional add-ons — they're requirements we design for from day one.",
  },
];

export default function OurStoryPage() {
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
              Our story
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              Founded on a simple question
            </h1>
            <p className="mt-6 text-lede text-charcoal/70 max-w-2xl">
              Why is it so difficult to know what's actually in a supplement, and whether the amounts matter?
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Narrative */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col gap-8"
          >
            <p className="text-lede text-charcoal/70">
              Velnora Nutra began with frustration. Not the dramatic kind — the quiet, persistent kind that comes from reading supplement labels and realizing you have no real idea what you're taking.
            </p>
            <p className="text-charcoal/70">
              The industry runs on proprietary blends that hide dosages, ingredients chosen for marketing appeal rather than evidence, and quality standards that stop at the minimum legal requirement. We saw a gap between what people deserve to know and what brands are willing to tell them.
            </p>
            <p className="text-charcoal/70">
              So we started differently. Before we formulated a single product, we defined our standards: complete ingredient transparency, therapeutic dosing backed by research, independent third-party verification for every batch, and sustainable sourcing with traceable supply chains.
            </p>
            <p className="text-charcoal/70">
              It took eighteen months to bring our first collection to market. We worked with researchers who shared our obsession with ingredient forms and dosages. We partnered with manufacturers who could meet our testing requirements without compromise. We chose packaging materials for recyclability, not just shelf appeal.
            </p>
            <p className="text-charcoal/70">
              Today, we offer a curated range of formulations across longevity, immunity, cognition, vitality, digestive health, and beauty. Each one follows the same principles. Each batch is independently tested. Each ingredient is disclosed with its purpose, form, and amount.
            </p>
            <p className="text-charcoal/70">
              We're still early in this journey. There's more to build, more categories to explore, more ways to make transparency the default rather than the exception. But the foundation is solid, and the direction is clear.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="py-section-space bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 pb-10 max-w-3xl"
          >
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Our journey
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Milestones
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative max-w-2xl"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-line" aria-hidden="true" />
            {milestones.map((milestone, index) => (
              <motion.article
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex gap-6 pb-12"
              >
                <div className="relative flex-shrink-0 flex items-center justify-center w-16">
                  <div className={cn(
                    "relative z-10 w-4 h-4 rounded-full border-2 border-line bg-ivory",
                    index === milestones.length - 1 && "bg-forest border-forest",
                  )} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-micro font-semibold uppercase tracking-[0.16em] text-forest">{milestone.year}</span>
                    <h3 className="font-serif text-lg text-charcoal">{milestone.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-charcoal/70">{milestone.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 pb-10 max-w-3xl"
          >
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Our values
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              How we work
            </h2>
            <p className="text-lede text-charcoal/70">
              Four principles that guide our daily decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {teamValues.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-3 p-6 rounded-card border border-line bg-ivory hover:border-forest/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-forest" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg text-charcoal">{value.title}</h3>
                <p className="text-sm text-charcoal/70">{value.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Founder Note */}
      <Section className="py-section-space bg-mist">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto p-8 lg:p-12 rounded-[1.5rem] bg-ivory"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-forest" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-serif text-lg text-charcoal">A note from our founder</p>
                  <p className="text-sm text-charcoal/50">Sarah Chen, Founder & CEO</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-forest pl-6 italic text-charcoal/80">
                <p className="text-lede">
                  "We started Velnora Nutra because we believed people deserved better than marketing masquerading as nutrition. Every formulation we create is a promise: what's on the label is what's in the bottle, the amounts are there for a reason, and someone independent has verified both."
                </p>
              </blockquote>
            </div>
          </motion.div>
        </Container>
      </Section>

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
              Experience the difference
            </h2>
            <p className="text-lede text-ivory/70 max-w-prose">
              Explore our formulations and see what transparency looks like in practice.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/collections" size="lg" variant="secondary">
                Shop formulations
              </ButtonLink>
              <ButtonLink href="/our-approach" size="lg" variant="outline" className="border-ivory/20 text-ivory hover:bg-ivory/10">
                Our approach
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}