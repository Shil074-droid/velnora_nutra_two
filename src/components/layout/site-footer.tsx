import Link from "next/link";
import { Leaf } from "lucide-react";

import { Container } from "@/components/ui/section";
import { categories } from "@/lib/data/categories";

const shopLinks = categories.slice(0, 4).map((c) => ({
  href: `/collections/${c.slug}`,
  label: c.name,
}));

const companyLinks = [
  { href: "/about", label: "Our story" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const supportLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
        {heading}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-charcoal/70 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Site-wide footer with navigation columns and brand note. */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-charcoal"
            >
              <Leaf className="h-5 w-5 text-forest" aria-hidden="true" />
              <span className="font-serif text-xl tracking-tight">
                Velnora <span className="text-forest">Nutra</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-charcoal/60">
              Premium, science-led nutraceuticals formulated with clean
              ingredients and a respect for the natural world.
            </p>
          </div>

          <LinkColumn heading="Shop" links={shopLinks} />
          <LinkColumn heading="Company" links={companyLinks} />
          <LinkColumn heading="Support" links={supportLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Velnora Nutra. All rights reserved.</p>
          <p className="max-w-md sm:text-right">
            These statements have not been evaluated by the Food and Drug
            Administration. This demo is for illustrative purposes only.
          </p>
        </div>
      </Container>
    </footer>
  );
}
