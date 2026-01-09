"use client";

import { useState } from "react";
import { products } from "../data/product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ShopPage() {
  const { promoApplied, setPromoApplied } = useCart();
  const { cart, updateQty, removeFromCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { addToCart } = useCart();
  const isInCart = (id) => cart.some((item) => item.id === id);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <main className="bg-cream min-h-screen px-4 pt-8 pb-24">
        <Navbar />

        <div className="sticky top-[72px] z-40 bg-cream pt-4">
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

        <div className="relative md:hidden rounded-2xl overflow-hidden mb-8 bg-[#a87753] text-cream">
          <div className="center  h-full w-1/2">
            <Image
              src="/assets/promo.jpg"
              alt="Coffee promo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#8b5e3c] via-[#9a6a45]/90 to-transparent" />

          <span className="absolute right-16 top-6 text-lg opacity-80">🤎</span>
          <span className="absolute right-10 bottom-10 text-sm opacity-70">
            🤎
          </span>
          <span className="absolute right-16 top-6 text-lg opacity-80">🤎</span>

          <div
            onClick={() => setPromoApplied((prev) => !prev)}
            className={`relative rounded-2xl p-5 mb-8 cursor-pointer transition ${
              promoApplied ? "ring-2 ring-green-400" : ""
            }`}
          >
            <span className="text-xs bg-red-500 px-3 py-1 rounded-full mb-3 inline-block">
              Promo
            </span>

            <h2 className="text-2xl font-semibold leading-tight">
              Buy one get <br /> one FREE
            </h2>
          </div>
        </div>

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-semibold text-sm">{product.title}</h3>
              <p className="text-xs opacity-60 mb-2">{product.category}</p>

              <div className="flex items-center justify-between">
                <span className="font-semibold">{product.price}</span>
                {isInCart(product.id) && (
                  <p className="text-[11px] text-green-600 mt-1">
                    Added to cart
                  </p>
                )}

                <div className="relative group">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      if (isInCart(product.id)) {
                        removeFromCart(product.id);
                      } else {
                        addToCart({ ...product, qty: 1 });
                      }
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                      isInCart(product.id)
                        ? "bg-green-600 text-white hover:bg-red-500"
                        : "bg-coffee text-cream hover:opacity-90"
                    }`}
                  >
                    {isInCart(product.id) ? "✓" : "+"}
                  </button>

                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                    {isInCart(product.id) ? "Remove from cart" : "Add to cart"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {cartOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
            <div className="w-full max-w-sm bg-white h-full p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Your Cart</h3>
                <button onClick={() => setCartOpen(false)} className="text-xl">
                  ✕
                </button>
              </div>

              {cart.length === 0 && (
                <p className="text-sm opacity-60">Your cart is empty.</p>
              )}

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm opacity-60">Qty: {item.qty}</p>
                    </div>

                    <div className="text-right space-y-1">
                      <p className="font-semibold">${item.price * item.qty}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <Link href="/checkout" onClick={() => setCartOpen(false)}>
                  <button className="mt-6 bg-[#b87333] text-white w-full py-4 rounded-2xl font-semibold">
                    Go to Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
