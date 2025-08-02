import ProductDetail from "@/components/ProductDetail";

export default function FemaleProductPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductDetail id={params.id} gender="female" />;
}
