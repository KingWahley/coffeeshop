"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const PRODUCT_MAP = {
  All: [
    { title: "Cappuccino" },
    { title: "Americano" },
    { title: "Espresso" },
    { title: "Doppio Classic" },
    { title: "Latte" },
  ],
  Black: [
    { title: "Americano" },
    { title: "Long Black" },
    { title: "Drip Coffee" },
    { title: "French Press" },
  ],
  Espresso: [
    { title: "Single Espresso" },
    { title: "Ristretto" },
    { title: "Lungo" },
  ],
  Doppio: [
    { title: "Double Espresso" },
    { title: "Classic Doppio" },
    { title: "Strong Doppio" },
  ],
};

export default function BestSelling() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);

  const products = PRODUCT_MAP[activeFilter];
  const visible = products.slice(index, index + 3);

  function prev() {
    setIndex(i => Math.max(i - 1, 0));
  }

  function next() {
    if (index + 3 < products.length) {
      setIndex(i => i + 1);
    }
  }

  function changeFilter(filter) {
    setActiveFilter(filter);
    setIndex(0); // reset slider per category
  }

  return (
    <section className="bg-caramel px-8 py-32">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h3 className="text-5xl font-semibold">Best Selling Item</h3>
        <p className="max-w-2xl mx-auto mt-6 text-sm opacity-70 leading-relaxed">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
          Ever Since The 1500s.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-10 mt-16 text-lg">
          {Object.keys(PRODUCT_MAP).map(filter => (
            <button
              key={filter}
              onClick={() => changeFilter(filter)}
              className={`pb-1 ${
                activeFilter === filter
                  ? "border-b-2 border-coffee"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 min-h-[420px]">
          {visible.map(product => (
            <ProductCard key={product.title} title={product.title} />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-4 mt-20">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 border border-coffee flex items-center justify-center disabled:opacity-40"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index + 3 >= products.length}
            className="w-10 h-10 bg-coffee text-cream flex items-center justify-center disabled:opacity-40"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
