import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/donelogo.png";
import ScrollLink from "./ScrollLink";

const Header = () => {
  return (
    <header className="bg-[#1b1b1b] shadow-md border-b border-[#D6AD60]/20 sticky top-0 z-99">
      <div className="mx-20 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">
          <Link href="/">
            <Image src={logo} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-4">
            <ScrollLink
              href={"#about"}
              className="text-[#ffff] hover:text-[#bbae94] px-3 py-2 md:text-md text-md rounded"
            >
              About
            </ScrollLink>
            <Link href="/contact">
              <p className="text-[#ffff] hover:text-[#bbae94] px-3 py-2 md:text-md text-md rounded">
                Contact
              </p>
            </Link>
            <Link
              href={"/shop"}
              className="border border-[#d4a251] hover:bg-[#e3b872] rounded-xl py-2 px-4 text-[#d4a251] hover:text-[#1b1b1b]  hover:scale-105 hover:shadow-lg hover:shadow-[#d4a251] transition-transform duration-150"
            >
              Shop Now
            </Link>
            {/* text-[#D6AD60] hover:text-[#bbae94] px-3 py-2 md:text-lg text-md rounded underline */}
          </nav>
          <div className="md:hidden"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
