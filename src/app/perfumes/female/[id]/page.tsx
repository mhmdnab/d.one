import ProductDetail from "@/components/ProductDetail";

export default function FemaleProductPage({ params }: any) {
  return <ProductDetail id={params.id} gender="female" />;
}
