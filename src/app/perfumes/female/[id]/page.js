// @ts-ignore
"use client";

import ProductDetail from "@/components/ProductDetail";

export default function FemaleProductPage({ params }) {
  return <ProductDetail id={params.id} gender="female" />;
}
