import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Section, Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <Section className="py-section-space">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <h1 className="text-display font-light text-charcoal">404</h1>
        <h2 className="text-h1 font-light text-charcoal">Page not found</h2>
        <p className="text-lede text-charcoal/70 max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <ButtonLink href="/">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return home
        </ButtonLink>
      </Container>
    </Section>
  );
}