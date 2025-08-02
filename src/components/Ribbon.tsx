"use client";
import React from "react";

const Ribbon = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 bg-[#D6AD60]">
      <div className="marquee">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="text-lg font-bold text-[#1b1b1b]">
            D.one Perfumes
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ribbon;
