"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Search, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { FAQItem } from "@/components/faq/faq-item";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What makes Velnora Nutra different from other supplement brands?",
        a: "We prioritize ingredient transparency, therapeutic dosing, and independent third-party verification for every batch. No proprietary blends, no fairy-dusting, no hidden fillers. Every ingredient is disclosed with its form, amount, and purpose.",
      },
      {
        q: "Are your products FDA approved?",
        a: "Dietary supplements are not FDA approved in the same way drugs are. However, our products are manufactured in cGMP-compliant facilities registered with the FDA, and every batch undergoes third-party testing for identity, purity, and potency.",
      },
      {
        q: "Where are your products manufactured?",
        a: "Our products are manufactured in the USA in facilities that are cGMP certified and regularly inspected. We work with partners who meet our rigorous quality standards.",
      },
      {
        q: "Are your products vegan/vegetarian?",
        a: "Many of our formulations use plant-based capsules and vegan-friendly ingredients. Check individual product pages for specific dietary information. We clearly label vegan and vegetarian options.",
      },
      {
        q: "Do you test for heavy metals and contaminants?",
        a: "Yes. Every batch is tested by accredited third-party laboratories for heavy metals (lead, mercury, arsenic, cadmium), microbial contamination, pesticides, and residual solvents. Results are available upon request.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & payment",
    questions: [
      {
        q: "Can I modify or cancel my order after placing it?",
        a: "We process orders quickly. Contact us within 1 hour of placing your order and we'll do our best to modify or cancel it before it ships. Once shipped, orders cannot be cancelled.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely.",
      },
      {
        q: "Do you offer subscription or auto-ship options?",
        a: "Yes, subscriptions are available on most products with a 10% discount. You can manage, pause, or cancel your subscription anytime from your account.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes. We use PCI DSS Level 1 certified payment processors. We never store your full credit card details on our servers.",
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes, digital gift cards are available in denominations from $25 to $500. They never expire and can be used on any product.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & delivery",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Domestic standard: 3-5 business days. Express: 1-2 business days. International: 5-21 business days depending on destination. See our Shipping page for full details.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes, free standard shipping on domestic orders over $75. International orders have shipping calculated at checkout.",
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to over 100 countries. Duties and taxes are collected at checkout where possible (IOSS for EU, GST for Australia/NZ). Some products may be restricted in certain markets.",
      },
      {
        q: "How do I track my order?",
        a: "You'll receive a tracking number via email when your order ships. Allow 24 hours for tracking to activate. You can also track from your account page.",
      },
      {
        q: "My order shows delivered but I haven't received it.",
        a: "Check with neighbors, building management, or around the delivery area. If still missing after 48 hours, contact us and we'll investigate with the carrier.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return window for unopened products in original condition. Opened products may be returned if there's a quality issue. Contact us to initiate a return.",
      },
      {
        q: "How do I start a return?",
        a: "Email orders@velnoranutra.com with your order number and reason for return. We'll provide a return authorization and shipping label (for quality issues).",
      },
      {
        q: "Who pays for return shipping?",
        a: "We cover return shipping for quality issues or incorrect items. For change-of-mind returns, the customer covers return shipping unless the order was over $75 (original shipping was free).",
      },
      {
        q: "How long do refunds take?",
        a: "Refunds are processed within 5-7 business days of receiving the return. The refund appears on your original payment method within 3-10 additional business days depending on your bank.",
      },
      {
        q: "Can I exchange an item?",
        a: "Yes, contact us and we'll process an exchange. We'll ship the replacement once the return is scanned by the carrier.",
      },
    ],
  },
  {
    id: "products",
    title: "Products & usage",
    questions: [
      {
        q: "How do I know which product is right for me?",
        a: "Our Journal has detailed guides on ingredient forms and choosing supplements. For personalized advice, consult your healthcare practitioner.",
      },
      {
        q: "Can I take multiple Velnora products together?",
        a: "Most of our formulations are designed to be complementary. However, check for overlapping ingredients (e.g., multiple products with magnesium) and consult your healthcare practitioner if unsure.",
      },
      {
        q: "Are there any side effects?",
        a: "Our products use well-tolerated ingredient forms at research-backed doses. Side effects are rare but can include mild digestive upset. Discontinue use and consult a healthcare professional if adverse reactions occur.",
      },
      {
        q: "How should I store the products?",
        a: "Store in a cool, dry place away from direct sunlight. Keep containers tightly closed. Most products have a 24-month shelf life from manufacture date (see bottle for expiration).",
      },
      {
        q: "Do your products contain allergens?",
        a: "Our products are free from gluten, dairy, soy, peanuts, tree nuts, shellfish, eggs, and sesame. They're manufactured in facilities that may process these allergens — see individual product pages for specific statements.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    questions: cat.questions.filter((q) =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0);

  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  };

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
              Frequently asked questions
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              Find your answer
            </h1>
            <p className="mt-6 text-lede text-charcoal/70 max-w-2xl">
              Quick answers to common questions about our products, orders, shipping, and more.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Search */}
      <section className="border-y border-line bg-ivory">
        <Container className="py-4">
          <div className="max-w-2xl mx-auto">
            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" aria-hidden="true" />
              <input
                id="faq-search"
                type="search"
                placeholder="Search questions…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 rounded-full border border-line bg-cream pl-12 pr-4 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-ivory">
        <Container>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === cat.id
                    ? "bg-forest text-ivory"
                    : "bg-cream text-charcoal/70 hover:bg-forest/5 hover:text-forest",
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <Section className="py-section-space">
        <Container>
          {searchQuery ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {filteredCategories.flatMap((cat) =>
                cat.questions.map((q, i) => (
                  <FAQItem
                    key={`${cat.id}-${i}`}
                    question={q.q}
                    answer={q.a}
                    isOpen={openQuestions.has(q.q)}
                    onToggle={() => toggleQuestion(q.q)}
                    index={i}
                  />
                ))
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={activeCategory}
              className="max-w-3xl mx-auto"
            >
              {faqCategories.find((c) => c.id === activeCategory)?.questions.map((q, i) => (
                <FAQItem
                  key={q.q}
                  question={q.q}
                  answer={q.a}
                  isOpen={openQuestions.has(q.q)}
                  onToggle={() => toggleQuestion(q.q)}
                  index={i}
                />
              ))}
            </motion.div>
          )}

          <div className="mt-12 text-center">
            <p className="text-charcoal/70 mb-4">Still can't find what you're looking for?</p>
            <ButtonLink href="/contact">
              Contact support
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}

