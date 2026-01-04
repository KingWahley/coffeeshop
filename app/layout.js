import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Caffeine Coffee",
  description: "Premium coffee experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-coffee">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
