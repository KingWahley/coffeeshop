"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-cream py-4">
        <nav className="max-w-6xl mx-auto border border-coffee/60 px-6 py-4 flex items-center justify-between text-coffee">

          {/* Logo */}
          <h1 className="text-2xl font-semibold tracking-wide">
            Caffeine
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            <li className="hover:opacity-80 cursor-pointer">Home</li>
            <li className="hover:opacity-80 cursor-pointer">Menu</li>
            <li className="hover:opacity-80 cursor-pointer">About Us</li>
            <li className="hover:opacity-80 cursor-pointer">Facilities</li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="hover:opacity-80 cursor-pointer">Sign In</span>
            <span className="h-5 w-px bg-cream/60"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 cursor-pointer hover:opacity-80"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.15 6.15a7.5 7.5 0 0 0 10.5 10.5Z"
              />
            </svg>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-cream"></span>
            <span className="w-6 h-[2px] bg-cream"></span>
            <span className="w-6 h-[2px] bg-cream"></span>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-x-0 top-[88px] z-40 md:hidden bg-coffee transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-8 space-y-6 text-sm text-cream">
          <p className="hover:opacity-80 cursor-pointer">Home</p>
          <p className="hover:opacity-80 cursor-pointer">Menu</p>
          <p className="hover:opacity-80 cursor-pointer">About Us</p>
          <p className="hover:opacity-80 cursor-pointer">Facilities</p>

          <div className="pt-4 border-t border-cream/30">
            <p className="hover:opacity-80 cursor-pointer">Sign In</p>
          </div>
        </div>
      </div>
    </>
  );
}
