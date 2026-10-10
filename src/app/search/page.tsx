import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search results",
  description: "Search Velnora Nutra products, articles, and categories.",
};

export async function generateStaticParams() {
  return [];
}

import SearchClient from "./search-client";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container-content px-gutter py-16"><div className="h-14 w-3/4 mx-auto animate-pulse rounded-full bg-line" /></div>}>
      <SearchClient />
    </Suspense>
  );
}