"use client";
import Image from "next/image";
import Link from "next/link";
import { perfumes } from "../data/data";

interface Props {
  gender: "Male" | "Female" | "Unisex";
}

export default function PerfumeList({ gender }: Props) {
  const filtered = perfumes.filter((p) => p.gender === gender);

  return (
    <div className="px-6 md:px-20 py-10 bg-[#1b1b1b]">
      <h2 className="text-2xl font-bold text-[#d4a251] mb-6">
        {gender} Perfumes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((perfume) => (
          <Link
            key={perfume.id}
            href={`/perfumes/${gender.toLowerCase()}/${perfume.id}`}
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
