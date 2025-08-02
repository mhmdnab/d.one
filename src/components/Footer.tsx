// components/Footer.js

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import logo from "../../public/images/donelogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-[#D6AD60] border-t  border-[#D6AD60]/20 flex flex-col items-center">
      <div className="container md:px-32 px-5 py-12  mx-auto  flex flex-col md:gap-y-0 gap-y-5 md:flex-row justify-between items-center">
        <div className="text-2xl flex gap-x-5 items-center">
          <Image src={logo} height={100} width={70} alt="logo" />
          <h1>D.ONE Perfumes</h1>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/d1premium.leb/"
            target="_blank"
            rel="noopener"
          >
            <FaInstagram
              size={"1.5em"}
              className="text-[#D6AD60] hover:text-[#bbae94] hover:scale-105 transition-transform"
            />
          </Link>
          <Link
            href="https://www.facebook.com/D.ONE.PERFUME"
            target="_blank"
            rel="noopener"
          >
            <FaFacebook
              size={"1.5em"}
              className="text-[#D6AD60] hover:text-[#bbae94] hover:scale-105 transition-transform"
            />
          </Link>
          <Link href="https://wa.me/9613113226" target="_blank" rel="noopener">
            <FaWhatsapp
              size={"1.5rem"}
              className="text-[#D6AD60] hover:text-[#bbae94] hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </div>
      <h4 className="flex gap-x-2 text-xs my-4 text-[#D6AD60]/80">
        <span>@{new Date().getFullYear()}</span>
        <span>|</span>
        <a
          className="underline hover:text-gray-400"
          href="https://mhmdnab.dev/"
          target="_blank"
          rel="noopener"
        >
          Mohamad Naboulsi
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
