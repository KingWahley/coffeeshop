"use client";

import { useState } from "react";
import { products } from "../data/product";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filtered = products.filter(
    p =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-cream min-h-screen px-4 pt-8 pb-24">

      {/* Location */}
      <div className="mb-6">
        <p className="text-xs opacity-60">Location</p>
        <p className="font-semibold">Bilzen, Tanjungbalai</p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 mb-6">
        <input
          placeholder="Search coffee"
          className="flex-1 rounded-xl bg-white px-4 py-3 text-sm border border-coffee/20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="w-12 h-12 bg-coffee text-cream rounded-xl flex items-center justify-center">
          ☰
        </button>
      </div>

      {/* Promo Banner */}
      <div className="relative bg-[#b08968] rounded-2xl p-5 mb-8 text-cream overflow-hidden">
        <p className="text-xs bg-red-500 inline-block px-3 py-1 rounded-full mb-3">
          Promo
        </p>
        <h2 className="text-2xl font-semibold leading-tight">
          Buy one get <br /> one FREE
        </h2>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition ${
              category === cat
                ? "bg-coffee text-cream"
                : "bg-white border border-coffee/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filtered.map(product => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="bg-white rounded-2xl p-3 shadow-sm"
          >
            {/* Image */}
            <div className="relative h-32 rounded-xl overflow-hidden mb-3">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-sm">{product.title}</h3>
            <p className="text-xs opacity-60 mb-2">{product.category}</p>

            {/* Price + Add */}
            <div className="flex items-center justify-between">
              <span className="font-semibold">{product.price}</span>
              <button className="w-8 h-8 bg-coffee text-cream rounded-full flex items-center justify-center">
                +
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
