"use client";

import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "../data/product";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function CheckoutPage() {
  

  const [cartOpen, setCartOpen] = useState(false);

  const { cart, removeFromCart } = useCart();

  const [payment, setPayment] = useState("card");
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const promoDiscount = promoApplied
    ? (() => {
        const prices = cart.flatMap((item) => Array(item.qty).fill(item.price));

        prices.sort((a, b) => a - b);

        const freeCount = Math.floor(prices.length / 2);

        return prices
          .slice(0, freeCount)
          .reduce((sum, price) => sum + price, 0);
      })()
    : 0;

  const deliveryFee = 5;
  const total = Math.max(0, subtotal - promoDiscount + deliveryFee);

  const related = products.slice(0, 3);

  const canApplyPromo = cart.reduce((s, i) => s + i.qty, 0) >= 2;

  return (
    <div>
      <main className="bg-cream min-h-screen pb-32">
        <Navbar />

        <div className=" px-6 py-4">
          <h2 className="font-semibold text-center">Checkout</h2>
          <div className="flex items-center justify-end">
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

        <div className="px-6 space-y-8 max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:px-8">
          <div className="space-y-8">
            <section>
              <h3 className="font-semibold mb-3">Delivery Address</h3>
              <div className="bg-white rounded-2xl p-4 border border-coffee/10">
                <textarea className="font-medium w-full">John wills</textarea>
                <textarea className="text-sm w-full opacity-70">
                  39 Brooklyn Street, Covington, VA 24426
                </textarea>
              </div>
            </section>

            <section>
              <h3 className="font-semibold mb-3">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "paypal", label: "PayPal" },
                  { id: "cash", label: "Cash on Delivery" },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPayment(method.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border ${
                      payment === method.id
                        ? "border-coffee bg-coffee/10"
                        : "border-coffee/20"
                    }`}
                  >
                    <span>{method.label}</span>
                    {payment === method.id && <span>✓</span>}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-semibold mb-3">Promo</h3>
              <button
                disabled={!canApplyPromo}
                onClick={() => setPromoApplied((p) => !p)}
                className={`w-full p-4 rounded-2xl border flex items-center justify-between transition ${
                  promoApplied
                    ? "bg-green-50 border-green-400"
                    : "bg-white border-coffee/20"
                } ${!canApplyPromo && "opacity-40 cursor-not-allowed"}`}
              >
                <div>
                  <p className="font-medium">Buy 1 Get 1 FREE</p>
                  <p className="text-sm opacity-70">
                    Cheapest item will be free
                  </p>
                </div>
                {promoApplied && (
                  <span className="font-semibold">✓ Applied</span>
                )}
              </button>
            </section>

            <section>
              <h3 className="font-semibold mb-3">You may also like</h3>
              <div className="grid grid-cols-3 gap-4">
                {related.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-2 text-center"
                  >
                    <div className="relative h-20 mb-2 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section>
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden">
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

                    <p className="font-semibold">${item.price * item.qty}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              {promoApplied && promoDiscount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Promo Discount</span>
                  <span>- ${promoDiscount}</span>
                </div>
              )}

              <div className="flex justify-between text-sm">
                <span>Delivery</span>
                <span>${deliveryFee}</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </section>
          </div>
        </div>

        <div className="fixed bottom-0 inset-x-0 bg-white border-t border-coffee/10 px-6 py-4 flex items-center justify-between md:hidden">
          <div>
            <p className="text-xs opacity-60">Total</p>
            <p className="text-xl font-semibold">${total}</p>
          </div>
          <button className="bg-[#b87333] text-white px-10 py-3 rounded-2xl font-semibold">
            Place Order
          </button>
        </div>

        <div className="hidden md:flex justify-end max-w-6xl mx-auto px-8 py-10">
          <button className="bg-[#b87333] text-white px-14 py-4 rounded-2xl font-semibold">
            Place Order
          </button>
        </div>
        {cartOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
            <div className="w-full max-w-sm bg-white h-full p-6 overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Your Cart</h3>
                <button onClick={() => setCartOpen(false)} className="text-xl">
                  ✕
                </button>
              </div>

              {/* Empty state */}
              {cart.length === 0 && (
                <p className="text-sm opacity-60">Your cart is empty.</p>
              )}

              {/* Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    {/* Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm opacity-60">Qty: {item.qty}</p>
                    </div>

                    {/* Price + Delete */}
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

              {/* Footer */}
              {cart.length > 0 && (
                <div className="mt-6">
                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full bg-[#b87333] text-white py-3 rounded-xl font-semibold"
                  >
                    Continue Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
