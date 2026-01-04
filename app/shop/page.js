"use client";

import { useState } from "react";
import { products } from "../data/product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";

export default function ShopPage() {
  const { cart, updateQty, removeFromCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { addToCart } = useCart();

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-cream min-h-screen px-4 pt-8 pb-24">
      <Navbar />

      <div className="sticky top-[72px] z-40 bg-cream pt-4">
        {/* Search */}
        <div className="flex items-center gap-3 mb-6">
          <input
            placeholder="Search coffee"
            className="flex-1 rounded-xl bg-white px-4 py-3 text-sm border border-coffee/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setCartOpen(true)}
            className="relative w-12 h-12 bg-coffee text-cream rounded-xl flex items-center justify-center"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
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
        {categories.map((cat) => (
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
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition"
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

              <button
                onClick={(e) => {
                  e.preventDefault(); // stop navigation
                  e.stopPropagation(); // stop bubbling
                  addToCart({ ...product, qty: 1 });
                }}
                className="w-8 h-8 bg-coffee text-cream rounded-full flex items-center justify-center hover:opacity-90 transition"
              >
                +
              </button>
            </div>
          </Link>
        ))}
      </div>
      {/* Cart Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button onClick={() => setCartOpen(false)}>✕</button>
          </div>

          {/* Items */}
          <div className="flex-1 space-y-4 overflow-y-auto">
            {cart.length === 0 && (
              <p className="text-sm opacity-60">Your cart is empty.</p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm opacity-60">
                    ${item.price} × {item.qty}
                  </p>

                  {/* Qty Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-7 h-7 border rounded"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <Link href="/checkout" onClick={() => setCartOpen(false)}>
              <button className="mt-6 bg-[#b87333] text-white w-full py-4 rounded-2xl font-semibold">
                Go to Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
