"use client";

import Image from "next/image";

import { products } from "../../data/product";
import { useCart } from "../../../context/CartContext";
import { useRouter } from "next/navigation";

import { useState } from "react";

import Link from "next/link";

export default function ProductPage({ params }) {
  const router = useRouter();
  const product = products.find((p) => p.id === params.slug);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  if (!product) {
    return <p className="p-8">Product not found</p>;
  }

  return (
    <main className="bg-cream min-h-screen pb-28 md:pb-16">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link href="/shop" className="text-xl">
          ←
        </Link>
        <h2 className="font-semibold">Detail</h2>
        <span className="text-xl">♡</span>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:px-6">
        {/* Image */}
        <div className="px-6 md:px-0">
          <div className="relative h-64 md:h-[420px] rounded-2xl overflow-hidden bg-coffee/10">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 mt-6 space-y-6 md:mt-0 md:px-0">
          <h1 className="text-2xl md:text-4xl font-semibold">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex flex-row  ">
            <div className="flex items-center gap-2 text-sm me-10">
              <span className="text-yellow-500">★</span>
              <span className="font-medium">4.8</span>
              <span className="opacity-60">(230)</span>
            </div>

            {/* Icons */}
            <div className="flex gap-4">
              {["🔥", "☕", "📦"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-coffee/10 flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-md">
              {product.description}
            </p>
          </div>

          {/* Desktop Price + CTA */}
          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-xl border border-coffee/30 flex items-center justify-center text-lg"
              >
                −
              </button>

              <span className="text-lg font-semibold">{qty}</span>

              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 rounded-xl border border-coffee/30 flex items-center justify-center text-lg"
              >
                +
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between pt-6">
            <div>
              <p className="text-xs opacity-60">Price</p>
              <p className="text-2xl font-semibold">{product.price * qty}</p>
            </div>

            <button
              className="bg-[#b87333] text-white px-12 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
              onClick={() => {
                addToCart({ ...product, qty });
                router.push("/checkout");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed md:hidden bottom-0 inset-x-0 bg-white border-t border-coffee/10 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs opacity-60">Price</p>
          <p className="text-xl font-semibold">{product.price * qty}</p>
        </div>

        <button
          className="bg-[#b87333] text-white px-12 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
          onClick={() => {
            addToCart({ ...product, qty });
            router.push("/checkout");
          }}
        >
          Buy Now
        </button>
      </div>
    </main>
  );
}
