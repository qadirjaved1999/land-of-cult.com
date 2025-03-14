"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import label from "@/libs/english.json";
import { useRefs } from "@/context/RefsContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const refs = useRefs();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between p-4 md:p-5 px-6 md:px-10 lg:px-16 xl:px-20 3xl:px-32">

        {/* Navigation Links For Desktop (Hidden on Small Screens) */}
        <nav className="hidden md:flex flex-wrap items-center text-base gap-4 lg:gap-6 xl:gap-8">
          <Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection(refs.myAccount); }} className="text-white uppercase text-xs md:text-sm lg:text-base">{label.myAccount}</Link>
          <Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection(refs.documentation); }} className="text-white uppercase text-xs md:text-sm lg:text-base">{label.documentation}</Link>
          <Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection(refs.discover); }} className="text-white uppercase text-xs md:text-sm lg:text-base">{label.discover}</Link>
          <Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection(refs.newWorld); }} className="text-white uppercase text-xs md:text-sm lg:text-base">{label.newWorld}</Link>
          <Link href="#" onClick={(e) => { e.preventDefault(); scrollToSection(refs.community); }} className="text-white uppercase text-xs md:text-sm lg:text-base">{label.community}</Link>
        </nav>

        {/* Right Side Buttons (Shown on Larger Screens) */}
        <div className="hidden max-1080:hidden md:flex items-center gap-3 md:gap-4">
          {/* Animated Button */}
          <button className="relative overflow-hidden bg-[#C7C7C7] text-black px-10 py-1 text-lg uppercase rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out hover:bg-transparent hover:text-white 
            before:content-[''] before:absolute before:top-0 before:right-[-120%] before:h-full before:w-[120%] before:bg-[#C7C7C7] before:skew-x-[30deg] before:transition-all before:duration-500 before:ease-in-out hover:before:right-[120%]">
            {label.lunchMapBtn}
          </button>

          {/* Shadow Effect Button */}
          <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
            {label.whitepaperBtn}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden absolute top-4 right-6"
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path stroke="white" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Sidebar Menu (For Mobile Screen) */}
      <div className={`fixed top-0 right-0 h-screen w-[300px] md:w-[350px] bg-black text-white transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 shadow-lg`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            <path stroke="white" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Logo at Top Center */}
        <div className="flex justify-center mt-10">
          <Image src="/assets/icons/logo.webp" alt="Logo" width={150} height={50} />
        </div>

        {/* Navigation Links (For Mobile Sidebar) */}
        <nav className="flex flex-col items-start px-6 mt-8 space-y-4">
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">{label.myAccount}</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">{label.documentation}</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">{label.discover}</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">{label.newWorld}</Link>
          <Link href="#" className="text-white uppercase text-xs md:text-sm lg:text-base">{label.community}</Link>
        </nav>

        {/* Buttons for small screen */}
        <div className="flex flex-col px-6 mt-6 space-y-3">
          {/* Animated Button */}
          <button className="relative overflow-hidden bg-[#C7C7C7] text-black px-10 py-1 text-lg uppercase rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out hover:bg-transparent hover:text-white 
            before:content-[''] before:absolute before:top-0 before:right-[-120%] before:h-full before:w-[120%] before:bg-[#C7C7C7] before:skew-x-[30deg] before:transition-all before:duration-500 before:ease-in-out hover:before:right-[120%]">
            {label.lunchMapBtn}
          </button>

          {/* Shadow Effected Button */}
          <button className="relative border-2 border-white text-white text-lg uppercase px-10 py-1 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white]">
            {label.whitepaperBtn}
          </button>
        </div>
      </div>
    </header>
  );
}
