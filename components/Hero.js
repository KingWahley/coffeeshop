"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Parallax from "./Parallax";
import Link from "next/link";

export default function Hero() {
  const [mobileOffset, setMobileOffset] = useState(0);

  // Mobile parallax (works on iOS + Android)
  useEffect(() => {
    let raf = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setMobileOffset(window.scrollY * 0.18);
        raf = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative bg-coffee text-cream overflow-hidden">
      {/* MOBILE PARALLAX IMAGE */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          transform: `translateY(${mobileOffset}px)`,
        }}
      >
        <Image
          src="/assets/pngwing.com.png"
          alt="Coffee background"
          fill
          className="object-contain opacity-40"
          priority
        />
      </div>

      {/* Mobile overlay for readability */}
      <div className="absolute inset-0 bg-coffee/80 md:hidden"></div>

      <div className="relative max-w-6xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left content (static) */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.15] font-semibold">
            Discover The
            <br />
            Art Of Perfect
            <br />
            Coffee
          </h1>

          <p className="mt-8 max-w-md text-sm leading-relaxed opacity-80">
            Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends,
            Crafted To Awaken Your Senses And Start Your Day Right.
          </p>

          <div className="mt-10 flex gap-6">
            <Link
              href="/shop"
              className="flex items-center gap-2 bg-cream text-coffee px-6 py-3 text-sm hover:bg-coffee hover:text-cream hover:border border-cream"
            >
              Order Now
              <span className="text-lg">→</span>
            </Link>

            <Link
              href="#features"
              className="hover:bg-cream hover:text-coffee  inline-block border border-cream/70 px-6 py-3 text-sm 87o63421q34567 p[p0o9y765ew432 "
            >
              Explore More
            </Link>
          </div>

          <div className="mt-16 flex gap-14">
            <div>
              <p className="text-3xl font-semibold">50+</p>
              <p className="text-xs opacity-70 mt-1">ITEM OF COFFEE</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">20+</p>
              <p className="text-xs opacity-70 mt-1">ORDER RUNNING</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">2k+</p>
              <p className="text-xs opacity-70 mt-1">HAPPY CUSTOMER</p>
            </div>
          </div>
        </div>

        {/* DESKTOP PARALLAX IMAGE */}
        <Parallax speed={0.45}>
          <div className="relative hidden md:flex justify-end">
            <span className="absolute top-10 right-0 text-[180px] font-bold opacity-[0.04] select-none">
              Coffee
            </span>

            <div className="relative w-[520px] h-[520px] flex items-center justify-center">
              <Image
                src="/assets/pngwing.com.png"
                alt="Cup of coffee"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
