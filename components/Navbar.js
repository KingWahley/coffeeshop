"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (path) =>
    `cursor-pointer transition ${
      pathname === path
        ? "border-b-2 border-coffee font-semibold"
        : "hover:opacity-80"
    }`;

  const mobileLinkClass = (path) =>
    `block ${
      pathname === path
        ? "font-semibold underline"
        : "hover:opacity-80"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-cream overflow-visible py-2">
      <nav className="relative max-w-6xl mx-auto border border-coffee/60 px-6 py-4 flex items-center justify-between text-coffee">

        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide">
          <Link href="/">Caffeine</Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <li className={linkClass("/")}>
            <Link href="/">Home</Link>
          </li>
          <li className={linkClass("/shop")}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={linkClass("/about")}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={linkClass("/facilities")}>
            <Link href="/facilities">Facilities</Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <span className={linkClass("/login")}>
            <Link href="/login">Sign In</Link>
          </span>
          <span className="h-5 w-px bg-coffee/40"></span>

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
          <span className="w-6 h-[2px] bg-coffee"></span>
          <span className="w-6 h-[2px] bg-coffee"></span>
          <span className="w-6 h-[2px] bg-coffee"></span>
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute left-0 top-full w-full bg-coffee border-t border-cream/30 md:hidden">
            <div className="px-6 py-8 space-y-6 text-sm text-cream">
              <Link href="/" className={mobileLinkClass("/")}>Home</Link>
              <Link href="/shop" className={mobileLinkClass("/shop")}>Shop</Link>
              <Link href="/about" className={mobileLinkClass("/about")}>About Us</Link>
              <Link href="/facilities" className={mobileLinkClass("/facilities")}>Facilities</Link>

              <div className="pt-4 border-t border-cream/30">
                <Link href="/login" className={mobileLinkClass("/login")}>
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
