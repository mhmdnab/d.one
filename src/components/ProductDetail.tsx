"use client";
import Image from "next/image";
import { perfumes } from "../data/data";
import { notFound } from "next/navigation";

export default function ProductDetail({
  id,
  gender,
}: {
  id: string;
  gender: string;
}) {
  const perfume = perfumes.find(
    (p) =>
      p.id === Number(id) && p.gender.toLowerCase() === gender.toLowerCase()
  );

  if (!perfume) return notFound();

  return (
    <div className="px-6 md:px-20 py-10 text-white bg-[#1b1b1b] min-h-screen">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-96">
          <Image
            src={perfume.image}
            alt={perfume.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#d4a251] mb-4">
            {perfume.name}
          </h1>
          <p className="mb-2 text-gray-300">
            <span className="font-semibold">Gender:</span> {perfume.gender}
          </p>
          <p className="mb-2 text-gray-300">
            <span className="font-semibold">Scent Family:</span>{" "}
            {perfume.family}
          </p>
          <p className="mt-6 text-gray-400">
            Discover the essence of {perfume.name}, a fragrance crafted for bold
            sophistication and charm.
          </p>
          <button className="border border-[#d4a251] hover:bg-[#e3b872] rounded-xl py-2 px-4 text-[#d4a251] hover:text-[#1b1b1b] my-28 hover:scale-105 hover:shadow-lg hover:shadow-[#d4a251] transition-transform duration-150">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
