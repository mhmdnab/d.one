import Image from "next/image";
import React from "react";
import bgImg from "../../public/images/shopNowBgImage.jpg";
import Link from "next/link";

const BreakImage = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
      <Image
        src={bgImg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <p className="text-lg md:text-2xl font-semibold mb-4 drop-shadow-lg text-white">
          Discover our curated selection of exquisite perfumes, showcasing
          distinct collections for men and women, each crafted to captivate and
          inspire.
        </p>
        <p className="self-start border border-[#d4a251] bg-[#1b1b1b] rounded-xl py-2 px-6 md:py-3 md:px-8 text-base md:text-xl text-[#d4a251] hover:scale-105 hover:shadow-xl hover:shadow-[#ce902d] transition-transform duration-150">
          <Link href={"/shop"}>Shop Now</Link>
        </p>
      </div>
    </div>
  );
};
//d4a251
export default BreakImage;
