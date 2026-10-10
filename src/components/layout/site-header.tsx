"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Leaf, Menu, X, Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { CartButton } from "@/components/layout/cart-button";
import { CartDrawerContent } from "@/components/layout/cart-drawer";
import { Container } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/our-approach", label: "Our approach" },
  { href: "/our-story", label: "Our story" },
  { href: "/journal", label: "Journal" },
];

const categoryLinks = [
  { href: "/collections/longevity", label: "Longevity" },
  { href: "/collections/immunity", label: "Immunity" },
  { href: "/collections/cognition", label: "Cognition" },
  { href: "/collections/vitality", label: "Vitality" },
  { href: "/collections/digestive", label: "Digestive" },
  { href: "/collections/beauty", label: "Beauty" },
];

/** Sticky site header with primary navigation, search, and cart drawer. */
export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const mountedRef = useRef(false);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      const input = searchInputRef.current || mobileSearchInputRef.current;
      input?.focus();
    }
  }, [searchOpen]);

  // Close menus on route change
  useEffect(() => {
    if (mountedRef.current) {
      setOpen(false);
      setSearchOpen(false);
      setCollectionsOpen(false);
    }
    mountedRef.current = true;
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const query = formData.get("q")?.toString().trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-[200] border-b border-line bg-ivory/85 backdrop-blur-sm">
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal"
            aria-label="Velnora Nutra — home"
          >
            <Leaf className="h-5 w-5 text-forest" aria-hidden="true" />
            <span className="font-serif text-xl tracking-tight">
              Velnora <span className="text-forest">Nutra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex md:gap-8" aria-label="Primary">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm tracking-tight transition-colors",
                    active ? "text-forest" : "text-charcoal/70 hover:text-forest",
                  )}
                >
                  {link.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-forest"
                    />
                  ) : null}
                </Link>
              );
            })}

            {/* Collections dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCollectionsOpen((v) => !v)}
                aria-expanded={collectionsOpen}
                aria-haspopup="true"
                className={cn(
                  "relative inline-flex items-center gap-1.5 text-sm tracking-tight transition-colors",
                  collectionsOpen ? "text-forest" : "text-charcoal/70 hover:text-forest",
                )}
              >
                Shop
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    collectionsOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {collectionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-[210] mt-2 min-w-[200px] rounded-soft bg-ivory border border-line shadow-lift py-2"
                  role="menu"
                >
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setCollectionsOpen(false)}
                      className="flex px-4 py-2 text-sm text-charcoal/70 transition-colors hover:bg-forest/5 hover:text-forest"
                      role="menuitem"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-2">
            <form onSubmit={handleSearch} className="relative" role="search">
              <label htmlFor="header-search" className="sr-only">
                Search products
              </label>
              <input
                ref={searchInputRef}
                id="header-search"
                name="q"
                type="search"
                placeholder="Search products…"
                className="h-10 w-64 rounded-full border border-line bg-cream px-4 pr-10 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-forest transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            <CartButton onClick={() => setCartOpen(true)} />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-forest/5 hover:text-forest"
              aria-label="Search"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <CartButton onClick={() => setCartOpen(true)} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-forest/5 hover:text-forest"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="border-t border-line bg-ivory md:hidden">
            <Container className="py-3">
              <form onSubmit={handleSearch} className="relative">
                <label htmlFor="mobile-search" className="sr-only">
                  Search products
                </label>
                <input
                  ref={mobileSearchInputRef}
                  id="mobile-search"
                  name="q"
                  type="search"
                  placeholder="Search products…"
                  autoFocus
                  className="h-11 w-full rounded-full border border-line bg-cream px-4 pr-10 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-forest"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-forest transition-colors"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </Container>
          </div>
        )}

        {/* Mobile Navigation */}
        {open && (
          <nav className="border-t border-line bg-ivory md:hidden" aria-label="Mobile">
            <Container className="flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-soft px-2 py-3 text-base text-charcoal transition-colors hover:bg-forest/5 hover:text-forest"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <p className="px-2 py-2 text-micro font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                  Categories
                </p>
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setOpen(false)}
                    className="px-2 py-2.5 text-sm text-charcoal/70 transition-colors hover:bg-forest/5 hover:text-forest"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </Container>
          </nav>
        )}

        {/* Cart Drawer */}
        <CartDrawerContent isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </header>

      {/* Search Modal for Desktop (optional enhancement) */}
      {searchOpen && (
        <div className="fixed inset-0 z-[250] md:hidden" onClick={() => setSearchOpen(false)} />
      )}
    </>
  );
}