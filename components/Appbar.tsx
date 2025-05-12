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


    return <nav className="fixed top-0 left-0 py-0.5 w-full bg-[#FFFFFF] backdrop-blur-[0.8rem] border-opacity-40 shadow-xl md:px-20 px-0 items-center flex justify-between  md:space-x-16 space-x-0 z-50">
        <div className="flex justify-start">
            <Image alt="logo" className=" w-[190px] md:w-[210px]" width={140} height={1} src={"/visakey-logo.png"}/>
        </div>
        <div className="hidden md:flex justify-center text-[#7A7A7A] space-x-0 md:space-x-12 font-bold">
            <button onClick={() => scrollToSection("#home")} className="hover:text-black transition duration-300 md:hover:scale-105"  >Home</button>
            <button onClick={() => scrollToSection("#about")} className="hover:text-black transition duration-300 md:hover:scale-105" >About</button>
            <button onClick={() => scrollToSection("#services")} className="hover:text-black transition duration-300 md:hover:scale-105" >Our Services</button>
            <button onClick={() => scrollToSection("#contact")} className="hover:text-black transition duration-300 md:hover:scale-105" >Contact Us</button>
        </div>
        <div>
            <a href="tel:8264551555" className="hidden md:block bg-black text-white py-2 px-7 md:-mr-15 font-medium rounded hover:text-white hover:bg-[#028DF3] transition duration-400">
                Apply Now
            </a>
              {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[36px] -ml-11 focus:outline-none text-[#FAB855]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
        </div>
      

      {/* Mobile Menu */}
      <div
        className={`absolute top-19 left-0 w-full bg-white shadow-md lg:hidden transition-all duration-300 ease-in-out ${
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
          <a
            href="tel:8264551555"
            onClick={() => setMenuOpen(false)}
            className="bg-[#FAB855] py-2 px-7 font-medium rounded hover:text-white hover:bg-slate-900 transition duration-300"
          >
            Apply Now
          </a>
        </div>
    </div>
    </nav>
}