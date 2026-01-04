"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Shalima Hayden",
    text: "Really Amazing To Me. The Combination Was Very Good.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text: "Caffeine Delivers Consistent Quality Every Time. ",
    rating: 5,
  },
  {
    name: "Emily Carter",
    text: "The Flavor Is Rich, Smooth, And Perfectly Balanced.",
    rating: 4,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-cream py-32 relative">
      <div className="max-w-6xl mx-auto relative px-16">
        <h3 className="text-5xl font-semibold text-center mb-24">
          What Our Customer Says
        </h3>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 
                       w-12 h-12 border border-coffee 
                       flex items-center justify-center 
                       text-xl z-20 bg-cream"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute -right-16 top-1/2 -translate-y-1/2 
                       w-12 h-12 border border-coffee 
                       flex items-center justify-center 
                       text-xl z-20 bg-coffee text-cream"
          >
            →
          </button>

          <div className="bg-coffee  text-cream px-20 py-24 text-center relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-cream bg-black/30 flex items-center justify-center">
                <span className="text-xs opacity-60">Photo</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-3xl mx-auto opacity-90">
              {t.text}
            </p>

            <div className="flex justify-center gap-1 mt-8 text-yellow-400">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="mt-4 text-xs sm:text-lg font-semibold">{t.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
