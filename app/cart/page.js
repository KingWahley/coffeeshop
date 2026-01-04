"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, total } = useCart();

  return (
    <main className="bg-cream px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold">Your Cart</h1>
        {cart.length === 0 && <p className="mt-10">Your cart is empty.</p>}
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mt-8">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <input
                type="number"
                value={item.qty}
                min="1"
                onChange={(e) => updateQty(item.id, +e.target.value)}
                className="border w-16 mt-2"
              />
            </div>
            <div>
              <p>${item.price * item.qty}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <h2 className="mt-12 text-2xl font-semibold">Total: ${total}</h2>
        {cart.length > 0 && (
          <Link href="/checkout">
            <button className="mt-6 bg-[#b87333] text-white px-10 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </Link>
        )}
        ✅{" "}
      </div>
    </main>
  );
}
