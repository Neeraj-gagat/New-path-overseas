"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      {/* Menu Button */}
      <button
        className=" right-7 pt-3 z-50 flex flex-col items-center justify-center space-y-1 group focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-logocolor rounded-sm transform transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-logocolor rounded-sm transform transition-transform duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-logocolor rounded-sm transform transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-[500px] w-full bg-white transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          {/* Logo */}
          <div className="bg-gradient-to-br from-brown to-bg_gradient2 pt-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl pt-1 pl-4 pb-4 text-logocolor font-bold">ATLANTIC GLOBAL</h1>
            <button
              className="text-5xl pr-10 text-logocolor top-0 font-bold focus:outline-none pb-4"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
          </div>

          {/* Menu Items */}
          <nav className="mt-4 space-y-4">
            {[
              {name:"Home",link:"/"},
              {name:"About",link:"/about"},
              {name:"Services ",link:"/services"},
              {name:"Countries",link:"/countries"},
              {name:"Passport",link:"/passport"},
              {name:"Contact",link:"/contact"},
              {name:"Rewards",link:"/rewards"},
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block font-bold text-lg text-gray-700 border-b-2 pl-6 hover:text-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Apply Button */}
          <div className="mt-8 mx-9">
            <a
              target="_blank" rel="noopener noreferrer" href="https://wa.me/+971556998955?text=Hi%2C%20I%20have%20a%20query!"
              className="block text-center bg-logocolor text-white font-bold py-2 rounded-full hover:bg-yellow-600"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
