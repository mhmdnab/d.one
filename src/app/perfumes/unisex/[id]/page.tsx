import ProductDetail from "@/components/ProductDetail";

export default function UnisexProductPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductDetail id={params.id} gender="unisex" />;
}
