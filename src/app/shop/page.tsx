import Image from "next/image";
import Link from "next/link";
import { perfumes } from "@/data/data"; // Adjust path if needed

export default function ShopPage() {
  return (
    <div className="px-6 md:px-20 py-10 bg-[#1b1b1b] min-h-screen">
      <h1 className="text-3xl font-bold text-[#d4a251] mb-4 text-center">
        Shop Now
      </h1>
      <p className="text-white text-sm text-center mb-12">
        Discover the finest fragrances hand-picked for every style and mood.
        Find your signature scent below.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {perfumes.map((perfume) => (
          <Link
            key={perfume.id}
            href={`/perfumes/${perfume.gender.toLowerCase()}/${perfume.id}`}
            className="bg-[#232121] border border-gray-700 rounded-lg overflow-hidden text-center hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="relative w-full h-56">
              <Image
                src={perfume.image}
                alt={perfume.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="py-3">
              <h3 className="font-bold text-white text-sm">{perfume.name}</h3>
              <p className="text-xs text-[#d4a251]">{perfume.family}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
