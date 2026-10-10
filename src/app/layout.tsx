import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { CartProvider } from "@/lib/cart/cart-context";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Velnora Nutra — Premium nutraceuticals",
    template: "%s · Velnora Nutra",
  },
  description:
    "Premium, science-led nutraceuticals formulated with clean ingredients and a respect for the natural world.",
};

function HeaderSuspense() {
  return (
    <Suspense fallback={<header className="h-20 bg-ivory/85 backdrop-blur-sm border-b border-line" />}>
      <SiteHeader />
    </Suspense>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <AnnouncementBar />
          <HeaderSuspense />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}