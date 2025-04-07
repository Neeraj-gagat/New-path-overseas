"use client"
import Image from "next/image"
import { useState } from "react";

export const AppBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


  const scrollToSection = (id: string, offset = 50) => {
    const element = document.querySelector(id);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };


    return <nav className="fixed top-0 left-0 py-3 w-full bg-black backdrop-blur-[0.8rem] border-opacity-40 shadow-xl md:px-20 px-0 items-center flex justify-between  md:space-x-16 space-x-0 z-50">
        <div className="flex justify-start px-4">
            <Image alt="logo" className=" w-[140px] md:w-[140px]" width={140} height={1} src={"/logo7.png"}/>
        </div>
        <div className="hidden md:flex justify-center text-[#ffffff] space-x-0 md:space-x-12 font-bold">
            <button onClick={() => scrollToSection("#home")} className="hover:text-[#FAB855] transition duration-300 md:hover:scale-105"  >Home</button>
            <button onClick={() => scrollToSection("#about")} className="hover:text-[#FAB855] transition duration-300 md:hover:scale-105" >About</button>
            <button onClick={() => scrollToSection("#services")} className="hover:text-[#FAB855] transition duration-300 md:hover:scale-105" >Our Services</button>
            <button onClick={() => scrollToSection("#contact")} className="hover:text-[#FAB855] transition duration-300 md:hover:scale-105" >Contact Us</button>
        </div>
        <div>
            <button className="hidden md:block bg-white py-2 px-7 md:-mr-15 font-medium rounded hover:text-white hover:bg-[#FAB855] transition duration-300">
                Apply Now
            </button>
              {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl -ml-9 focus:outline-none text-[#FAB855]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
        </div>
      

      {/* Mobile Menu */}
      <div
        className={`absolute top-24.5 left-0 w-full bg-white shadow-md lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-start space-y-6 p-6 text-[#656669] font-bold">
          <button
            onClick={() => {
              scrollToSection("#home");
              setMenuOpen(false);
            }}
            className="hover:text-black transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("#about");
              setMenuOpen(false);
            }}
            className="hover:text-black transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("#services");
              setMenuOpen(false);
            }}
            className="hover:text-black transition duration-300"
          >
            Our Services
          </button>
          <button
            onClick={() => {
              scrollToSection("#contact");
              setMenuOpen(false);
            }}
            className="hover:text-black transition duration-300"
          >
            Contact Us
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-[#FAB855] py-2 px-7 font-medium rounded hover:text-white hover:bg-slate-900 transition duration-300"
          >
            Apply Now
          </button>
        </div>
    </div>
    </nav>
}