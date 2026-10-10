"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, Phone, ArrowRight, ChevronRight } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink, Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: [
      "support@velnoranutra.com (general)",
      "orders@velnoranutra.com (order inquiries)",
      "wholesale@velnoranutra.com (B2B/partnerships)",
    ],
    primary: "support@velnoranutra.com",
  },
  {
    icon: Clock,
    title: "Support hours",
    details: [
      "Monday–Friday: 9 AM – 6 PM ET",
      "Weekends: Closed",
      "Response time: 1-2 business days",
    ],
    primary: "9 AM – 6 PM ET, Mon-Fri",
  },
  {
    icon: MapPin,
    title: "Mailing address",
    details: [
      "Velnora Nutra",
      "123 Wellness Way, Suite 400",
      "New York, NY 10001, USA",
    ],
    primary: "New York, NY 10001",
  },
];

const faqLinks = [
  { q: "Where is my order?", href: "/faq#shipping" },
  { q: "How do I return a product?", href: "/faq#returns" },
  { q: "Do you ship internationally?", href: "/shipping" },
  { q: "Are your products third-party tested?", href: "/our-approach" },
  { q: "Can I modify or cancel my order?", href: "/faq#orders" },
  { q: "What payment methods do you accept?", href: "/faq#payment" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
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
              Contact us
            </span>
            <h1 className="mt-3 text-display font-light text-charcoal">
              We're here to help
            </h1>
            <p className="mt-6 text-lede text-charcoal/70 max-w-2xl">
              Have a question about your order, our formulations, or a wholesale inquiry? Choose the best way to reach us below.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods */}
      <Section className="py-section-space">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {contactInfo.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col gap-4 p-6 rounded-card border border-line bg-ivory"
              >
                <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-forest" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                <p className="text-charcoal/70 font-medium">{item.primary}</p>
                <ul className="flex flex-col gap-1 text-sm text-charcoal/60" role="list">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="py-section-space bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-start gap-6 pb-10 text-center">
              <span className="text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                Send a message
              </span>
              <h2 className="text-h1 font-light text-charcoal">
                Can't find your answer?
              </h2>
              <p className="text-lede text-charcoal/70">
                Fill out the form and we'll get back to you within 1-2 business days.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 text-center p-8 rounded-card border border-line bg-ivory"
              >
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-charcoal">Message sent</h3>
                <p className="text-charcoal/70">Thank you for reaching out. We'll respond within 1-2 business days.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    name="name"
                    label="Full name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    label="Email address"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                <Input
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                />

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "mt-1.5 h-28 w-full rounded-soft border bg-cream px-3.5 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest resize-none",
                      errors.message ? "border-danger" : "border-line focus:border-forest",
                    )}
                    aria-invalid={errors.message ? true : undefined}
                    required
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-danger">{errors.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <p className="text-xs text-charcoal/50 text-center">
                  This is a design demo — no data is submitted. By submitting, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Quick Help */}
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
              Quick help
            </span>
            <h2 className="text-h1 font-light text-charcoal">
              Common questions
            </h2>
            <p className="text-lede text-charcoal/70">
              Most questions are answered in our FAQ. Here are the top ones:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
          >
            {faqLinks.map((faq, index) => (
              <motion.article
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={faq.href}
                  className="flex items-center gap-3 p-4 rounded-card border border-line bg-ivory hover:border-forest/30 hover:bg-forest/5 transition-colors"
                >
                  <span className="text-sm text-charcoal/70">{faq.q}</span>
                  <ChevronRight className="h-4 w-4 text-charcoal/40 ml-auto" aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <ButtonLink href="/faq" variant="outline">
              View all FAQs
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
