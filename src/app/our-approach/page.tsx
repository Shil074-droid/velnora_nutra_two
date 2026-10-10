"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield, Leaf, FlaskConical, Recycle, Truck, RotateCcw, Star, Award, Microscope, Leaf as LeafIcon } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

const principles = [
  {
    icon: Microscope,
    title: "Ingredient transparency",
    description: "Every component is disclosed with its purpose, source, and form. No proprietary blends that hide dosages. You deserve to know exactly what you're taking and why.",
    details: [
      "Full ingredient disclosure with exact amounts",
      "No proprietary blends or hidden dosages",
      "Ingredient forms specified (e.g., magnesium glycinate vs oxide)",
      "Source information where available",
    ],
  },
  {
    icon: Shield,
    title: "Therapeutic dosing",
    description: "We use amounts supported by clinical research, not token quantities for label claims. Each ingredient is included at a level shown to be effective in peer-reviewed studies.",
    details: [
      "Dosages aligned with clinical literature",
      "No fairy-dusting or label-dressing",
      "Synergistic combinations where research supports it",
      "Forms selected for bioavailability",
    ],
  },
  {
    icon: Award,
    title: "Rigorous verification",
    description: "Identity, purity, and potency confirmed by accredited third-party laboratories for every batch. We don't rely solely on supplier certificates.",
    details: [
      "Third-party testing on every batch",
      "Identity confirmation (is it what it says it is?)",
      "Potency verification (is the amount correct?)",
      "Contaminant screening (heavy metals, microbes, pesticides)",
      "Stability testing for shelf-life claims",
    ],
  },
  {
    icon: LeafIcon,
    title: "Sustainable sourcing",
    description: "Ingredients selected for environmental responsibility and supply-chain traceability. We work with suppliers who share our commitment to the planet.",
    details: [
      "Traceable supply chains",
      "Environmentally responsible cultivation and extraction",
      "Preference for certified sustainable sources where available",
      "Packaging designed for recyclability",
    ],
  },
];

const standards = [
  {
    title: "cGMP manufacturing",
    description: "Produced in facilities registered with and inspected by regulatory authorities, following current Good Manufacturing Practices.",
    icon: Shield,
  },
  {
    title: "Third-party tested",
    description: "Every batch tested by independent, accredited laboratories for identity, purity, potency, and contaminants.",
    icon: Microscope,
  },
  {
    title: "Non-GMO verified",
    description: "Ingredients verified free from genetically modified organisms where applicable.",
    icon: Leaf,
  },
  {
    title: "Allergen conscious",
    description: "Formulated without common allergens. Free from gluten, dairy, soy, and artificial colors/flavors.",
    icon: Star,
  },
  {
    title: "Vegan options available",
    description: "Many formulations use plant-based capsules and vegan-friendly ingredients.",
    icon: Leaf,
  },
  {
    title: "Transparent labeling",
    description: "Every ingredient, excipient, and dosage clearly listed. No hidden fillers or proprietary blends.",
    icon: Award,
  },
];

const commitments = [
  "We will never use proprietary blends to hide ingredient amounts.",
  "We will never include an ingredient without a clear, research-backed rationale.",
  "We will never compromise on ingredient quality to reduce costs.",
  "We will never make claims that exceed what the evidence supports.",
  "We will always prioritize your trust over marketing convenience.",
];

export default function OurApproachPage() {
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
              Our standards
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              The Velnora approach
            </h1>
            <p className="mt-6 text-lede text-charcoal/70 max-w-2xl">
              Four principles that guide every formulation we create. They're not marketing promises — they're the standards we hold ourselves to, batch after batch.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Principles */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col gap-6 p-8 rounded-[1.5rem] border border-line bg-cream hover:border-forest/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-forest/5 flex items-center justify-center">
                    <principle.icon className="h-7 w-7 text-forest" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal">{principle.title}</h3>
                    <p className="mt-2 text-charcoal/70">{principle.description}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 pt-2 border-t border-line/50" role="list">
                  {principle.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-forest mt-2 shrink-0" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Quality Standards */}
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
              Quality standards
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Verified at every step
            </h2>
            <p className="text-lede text-charcoal/70">
              Our manufacturing and testing standards ensure that what's on the label is what's in the bottle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {standards.map((standard, index) => (
              <motion.article
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex flex-col gap-3 p-6 rounded-card border border-line bg-ivory"
              >
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center">
                  <standard.icon className="h-6 w-6 text-forest" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg text-charcoal">{standard.title}</h3>
                <p className="text-sm text-charcoal/70">{standard.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Our Commitments */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
              Our commitments
            </span>
            <h2 className="mt-3 text-h1 font-light text-charcoal">
              What we promise
            </h2>
            <p className="mt-4 text-lede text-charcoal/70">
              These aren't aspirations. They're the lines we won't cross.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col gap-4 mt-10"
            role="list"
          >
            {commitments.map((commitment, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 text-left p-5 rounded-card border border-line bg-ivory"
              >
                <Shield className="h-5 w-5 shrink-0 text-forest mt-0.5" aria-hidden="true" />
                <p className="text-charcoal/70">{commitment}</p>
              </motion.li>
            ))}
          </motion.ul>
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
              See our standards in practice
            </h2>
            <p className="text-lede text-ivory/70 max-w-prose">
              Explore our formulations and read the details for yourself.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/collections" size="lg" variant="secondary">
                Shop formulations
              </ButtonLink>
              <ButtonLink href="/our-story" size="lg" variant="outline" className="border-ivory/20 text-ivory hover:bg-ivory/10">
                Our story
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}