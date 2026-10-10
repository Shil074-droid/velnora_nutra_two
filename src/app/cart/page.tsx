import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your cart",
  description: "Review your cart and proceed to checkout.",
};

export async function generateStaticParams() {
  return [];
}

import CartClient from "./cart-client";

export default function CartPage() {
  return <CartClient />;
}