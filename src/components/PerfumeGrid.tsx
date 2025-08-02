"use client";
import Image from "next/image";
import Link from "next/link";
import { perfumes } from "../data/data";

const genderCategories = ["Male", "Female", "Unisex"];

export default function PerfumeGridSection() {
  return (
    <div className="px-6 md:px-20 py-10 bg-[#1b1b1b]">
      {/* SECTION INTRO */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-[#d4a251] mb-2">
          Explore Our Collection
        </h1>
        <p className="text-white text-sm">
          Discover the finest fragrances hand-picked for every style and mood.
          Find your signature scent below.
        </p>
      </div>

      {/* GENDER-BASED SECTIONS */}
      {genderCategories.map((gender) => {
        const filtered = perfumes.filter((p) => p.gender === gender);

        return (
          <section key={gender} className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#d4a251]">
                {gender === "Male"
                  ? "Men's Perfumes"
                  : gender === "Female"
                  ? "Women's Perfumes"
                  : "Unisex Perfumes"}
              </h2>
              <Link
                href={`/perfumes/${gender.toLowerCase()}`}
                className="text-sm underline text-[#d4a251]"
              >
                Click here for more
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {filtered.slice(0, 4).map((perfume) => (
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
                    <h3 className="font-bold text-white text-sm">
                      {perfume.name}
                    </h3>
                    <p className="text-xs text-[#d4a251]">{perfume.family}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
