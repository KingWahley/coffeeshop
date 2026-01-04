"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [promoApplied, setPromoApplied] = useState(false);

  // -------------------------
  // Cart actions
  // -------------------------
  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + (product.qty || 1) }
            : item
        );
      }

      return [...prev, { ...product, qty: product.qty || 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function updateQty(id, qty) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  }

  // -------------------------
  // Pricing
  // -------------------------
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  // Buy One Get One Free
  const discount = useMemo(() => {
    if (!promoApplied) return 0;

    // Find items with qty >= 2
    const eligible = cart.filter((item) => item.qty >= 2);
    if (eligible.length === 0) return 0;

    // Cheapest eligible item becomes free
    return Math.min(...eligible.map((item) => item.price));
  }, [cart, promoApplied]);

  const total = useMemo(() => {
    return Math.max(0, subtotal - discount);
  }, [subtotal, discount]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,

        promoApplied,
        setPromoApplied,

        subtotal,
        discount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
