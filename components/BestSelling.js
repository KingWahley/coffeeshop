"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const PRODUCT_MAP = {
  All: [
    {
      title: "Cappuccino",
      description:
        "A smooth and balanced blend with rich crema and a bold finish.",
      image: "/assets/cappa.jpg",
      price: "$45",
      tags: ["Bold", "Classic", "Hot"],
    },
    {
      title: "Americano",
      description: "Clean, rich coffee with a lighter body and deep aroma.",
      image: "/assets/product2.jpg",
      price: "$40",
      tags: ["Smooth", "Black"],
    },
    {
      title: "Espresso",
      description: "Strong and concentrated, crafted for true coffee lovers.",
      image: "/assets/product3.jpg",
      price: "$35",
      tags: ["Strong", "Classic"],
    },
    {
      title: "Latte",
      description: "A creamy blend of espresso and steamed milk.",
      image: "/assets/product4.webp",
      price: "$48",
      tags: ["Creamy", "Milk"],
    },
  ],

  Black: [
    {
      title: "Americano",
      description: "Pure black coffee with a smooth, clean finish.",
      image: "/assets/product5.jpeg",
      price: "$40",
      tags: ["Black", "Smooth"],
    },
    {
      title: "Long Black",
      description: "Bold and aromatic with lasting depth.",
      image: "/assets/product6.webp",
      price: "$42",
      tags: ["Bold", "Black"],
    },
    {
      title: "Drip Coffee",
      description: "Classic slow-brewed coffee, full of flavor.",
      image: "/assets/product7.jpg",
      price: "$38",
      tags: ["Classic"],
    },
  ],

  Espresso: [
    {
      title: "Single Espresso",
      description: "Rich, intense shot with a strong finish.",
      image: "/assets/product8.webp",
      price: "$30",
      tags: ["Strong"],
    },
    {
      title: "Ristretto",
      description: "Shorter pull, deeper flavor.",
      image: "/assets/product9.webp",
      price: "$32",
      tags: ["Intense"],
    },
    {
      title: "Lungo",
      description: "Longer extraction with smooth bitterness.",
      image: "/assets/product10.jpg",
      price: "$34",
      tags: ["Smooth"],
    },
  ],

  Doppio: [
    {
      title: "Classic Doppio",
      description: "Double shot for maximum strength and aroma.",
      image: "/assets/product11.webp",
      price: "$50",
      tags: ["Double", "Strong"],
    },
    {
      title: "Bold Doppio",
      description: "Extra bold, crafted for serious coffee drinkers.",
      image: "/assets/product12.jpg",
      price: "$52",
      tags: ["Bold"],
    },
    {
      title: "Dark Doppio",
      description: "Deep roast with intense flavor.",
      image: "/assets/product13.webp",
      price: "$55",
      tags: ["Dark", "Strong"],
    },
  ],
};

export default function BestSelling() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(0);

  const products = PRODUCT_MAP[activeFilter];
  const visible = products.slice(index, index + 3);

  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  function next() {
    if (index + 3 < products.length) {
      setIndex((i) => i + 1);
    }
  }

  function changeFilter(filter) {
    setActiveFilter(filter);
    setIndex(0);
  }

  return (
    <section className="bg-caramel px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-5xl font-semibold">Best Selling Item</h3>
        <p className="max-w-2xl mx-auto mt-6 text-sm opacity-70 leading-relaxed">
          These are the favorites our customers keep coming back for. Carefully
          crafted, consistently balanced, and loved for their rich flavor.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-10 mt-16 text-lg">
          {Object.keys(PRODUCT_MAP).map((filter) => (
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 min-h-[480px]">
          {visible.map((product) => (
            <ProductCard key={product.title} {...product} />
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
