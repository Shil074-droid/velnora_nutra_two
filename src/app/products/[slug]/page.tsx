import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductBySlug, getProductsByCategory } from "@/lib/data/products";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

export async function generateStaticParams() {
  const products = await import("@/lib/data/products").then((m) => m.products);
  return products.map((product) => ({ slug: product.slug }));
}

import ProductClient from "./product-client";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}