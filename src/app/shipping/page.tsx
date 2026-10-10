"use client";

import { motion } from "framer-motion";
import { Truck, Plane, Shield, Clock, MapPin, AlertCircle, ChevronRight } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

const domesticShipping = [
  {
    title: "Standard shipping",
    price: "Free over $75 ($5.99 under $75)",
    timeline: "3-5 business days",
    description: "Tracked delivery via USPS or UPS Ground.",
  },
  {
    title: "Express shipping",
    price: "$12.99",
    timeline: "1-2 business days",
    description: "Priority tracked delivery via UPS or FedEx.",
  },
  {
    title: "Overnight shipping",
    price: "$24.99",
    timeline: "Next business day (orders before 12 PM ET)",
    description: "Fastest available option for urgent needs.",
  },
];

const internationalShipping = [
  {
    region: "Canada",
    price: "From $14.99",
    timeline: "5-10 business days",
    duties: "Duties & taxes calculated at checkout",
  },
  {
    region: "United Kingdom & EU",
    price: "From $19.99",
    timeline: "7-14 business days",
    duties: "IOSS registered — VAT collected at checkout for orders under €150",
  },
  {
    region: "Australia & New Zealand",
    price: "From $22.99",
    timeline: "7-14 business days",
    duties: "GST collected at checkout for orders under AUD 1,000",
  },
  {
    region: "Rest of world",
    price: "Calculated at checkout",
    timeline: "10-21 business days",
    duties: "Recipient responsible for all duties & taxes",
  },
];

const processingInfo = [
  {
    icon: Clock,
    title: "Order processing",
    description: "Orders placed before 12 PM ET on business days typically ship the same day. Orders after 12 PM ET or on weekends/holidays ship the next business day.",
  },
  {
    icon: Truck,
    title: "Tracking",
    description: "You'll receive a tracking number via email when your order ships. Allow 24 hours for tracking to activate.",
  },
  {
    icon: Shield,
    title: "Shipping protection",
    description: "All orders are insured against loss or damage in transit. Contact us within 48 hours of delivery if there's an issue.",
  },
  {
    icon: AlertCircle,
    title: "Restrictions",
    description: "Some products may not be available in certain countries due to regulatory restrictions. The checkout will show available items for your destination.",
  },
];

export default function ShippingPage() {
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
              Shipping & delivery
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              Delivery information
            </h1>
            <p className="mt-6 text-lede text-charcoal/70 max-w-2xl">
              Transparent shipping options for domestic and international orders. All prices in USD.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Domestic */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 pb-10 max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-forest" aria-hidden="true" />
              </div>
              <div>
                <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">Domestic</span>
                <h2 className="text-h1 font-light text-charcoal">United States</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {domesticShipping.map((option, index) => (
              <motion.article
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-3 p-6 rounded-card border border-line bg-ivory"
              >
                <h3 className="font-serif text-lg text-charcoal">{option.title}</h3>
                <p className="font-serif text-xl text-forest">{option.price}</p>
                <div className="flex flex-col gap-1.5 text-sm text-charcoal/70 pt-2 border-t border-line/50">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-forest" aria-hidden="true" />
                    <span>{option.timeline}</span>
                  </div>
                  <p>{option.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* International */}
      <Section className="py-section-space bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 pb-10 max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center">
                <Plane className="h-5 w-5 text-forest" aria-hidden="true" />
              </div>
              <div>
                <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">International</span>
                <h2 className="text-h1 font-light text-charcoal">Worldwide shipping</h2>
              </div>
            </div>
            <p className="text-lede text-charcoal/70">
              We ship to over 100 countries. Duties and taxes are collected at checkout where possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {internationalShipping.map((option, index) => (
              <motion.article
                key={option.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-3 p-6 rounded-card border border-line bg-ivory"
              >
                <h3 className="font-serif text-lg text-charcoal">{option.region}</h3>
                <p className="font-serif text-xl text-forest">{option.price}</p>
                <div className="flex flex-col gap-1.5 text-sm text-charcoal/70 pt-2 border-t border-line/50">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-forest" aria-hidden="true" />
                    <span>{option.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-forest" aria-hidden="true" />
                    <span>{option.duties}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 rounded-card border border-line bg-ivory p-6">
            <h3 className="font-serif text-lg text-charcoal mb-3">Important notes</h3>
            <ul className="flex flex-col gap-2 text-sm text-charcoal/70">
              <li>• Nutraceutical regulations vary by country. Some products may be restricted in certain markets.</li>
              <li>• We are not responsible for customs delays or additional fees imposed by destination countries.</li>
              <li>• Orders returned due to unpaid duties or refused delivery will be refunded minus shipping costs.</li>
              <li>• Delivery times are estimates and not guaranteed.</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Processing & Tracking */}
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
              Order processing
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              From checkout to doorstep
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {processingInfo.map((info, index) => (
              <motion.article
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-3 p-6 rounded-card border border-line bg-ivory"
              >
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center">
                  <info.icon className="h-5 w-5 text-forest" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg text-charcoal">{info.title}</h3>
                <p className="text-sm text-charcoal/70">{info.description}</p>
              </motion.article>
            ))}
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
              Ready to order?
            </h2>
            <p className="text-lede text-ivory/70 max-w-prose">
              Explore our formulations and experience thoughtful nutrition delivered to your door.
            </p>
            <ButtonLink href="/collections" size="lg" variant="secondary">
              Shop now
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}