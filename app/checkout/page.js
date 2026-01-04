"use client";

import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "../data/product";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [payment, setPayment] = useState("card");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const deliveryFee = 5;
  const total = subtotal + deliveryFee;

  const related = products.slice(0, 3);

  return (
    <main className="bg-cream min-h-screen pb-32">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/cart" className="text-xl">←</Link>
        <h2 className="font-semibold">Checkout</h2>
        <span />
      </div>

      {/* Content */}
      <div className="px-6 space-y-8 max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:px-8">

        {/* LEFT — Order Info */}
        <div className="space-y-8">

          {/* Delivery Address */}
          <section>
            <h3 className="font-semibold mb-3">Delivery Address</h3>
            <div className="bg-white rounded-2xl p-4 border border-coffee/10">
              <p className="font-medium">John Doe</p>
              <p className="text-sm opacity-70">
                39 Brooklyn Street, Covington, VA 24426
              </p>
              <button className="mt-3 text-sm text-coffee font-medium">
                Change
              </button>
            </div>
          </section>

          {/* Payment Method */}
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

          {/* Related Items */}
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

        {/* RIGHT — Order Summary */}
        <div className="space-y-6">

          {/* Items */}
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
                    <p className="text-sm opacity-60">
                      Qty: {item.qty}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ${item.price * item.qty}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Totals */}
          <section className="bg-white rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
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

      {/* Bottom CTA (Mobile) */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-coffee/10 px-6 py-4 flex items-center justify-between md:hidden">
        <div>
          <p className="text-xs opacity-60">Total</p>
          <p className="text-xl font-semibold">${total}</p>
        </div>

        <button className="bg-[#b87333] text-white px-10 py-3 rounded-2xl font-semibold">
          Place Order
        </button>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex justify-end max-w-6xl mx-auto px-8 py-10">
        <button className="bg-[#b87333] text-white px-14 py-4 rounded-2xl font-semibold">
          Place Order
        </button>
      </div>

    </main>
  );
}
