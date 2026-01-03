"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Shalima Hayden",
    text:
      "I Have Tested Caffeine Coffee Many Times. Really Amazing To Me. The Combination Was Very Good. One Thing Is To Serve Extraordinary Coffee With Caffeine. I Will Order From Caffeine For Any Of My Coffee Needs.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text:
      "Caffeine Delivers Consistent Quality Every Time. The Flavor Is Rich, Smooth, And Perfectly Balanced.",
    rating: 5,
  },
  {
    name: "Emily Carter",
    text:
      "From Aroma To Taste, Everything Feels Thoughtfully Crafted. Caffeine Has Become My Daily Go-To.",
    rating: 4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const prev = () =>
    setIndex(i => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setIndex(i => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-cream py-32 relative">
      <div className="max-w-6xl mx-auto relative px-16">

        {/* Heading */}
        <h3 className="text-5xl font-semibold text-center mb-24">
          What Our Customer Says
        </h3>

        {/* Card Wrapper */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 
                       w-12 h-12 border border-coffee 
                       flex items-center justify-center 
                       text-xl z-20 bg-cream"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute -right-16 top-1/2 -translate-y-1/2 
                       w-12 h-12 border border-coffee 
                       flex items-center justify-center 
                       text-xl z-20 bg-coffee text-cream"
          >
            →
          </button>

          {/* Testimonial Card */}
          <div className="bg-coffee text-cream px-20 py-24 text-center relative">

            {/* Avatar */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-cream bg-black/30 flex items-center justify-center">
                <span className="text-xs opacity-60">Photo</span>
              </div>
            </div>

            {/* Text */}
            <p className="text-sm leading-relaxed max-w-3xl mx-auto opacity-90">
              {t.text}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mt-8 text-yellow-400">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Name */}
            <p className="mt-4 text-lg font-semibold">{t.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
