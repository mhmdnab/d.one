import ProductDetail from "@/components/ProductDetail";

export default function MaleProductPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductDetail id={params.id} gender="male" />;
}
