import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { CartProvider } from "@/components/cart-components/CartContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en" className={montserrat.className}>
        <body>
          {children}
          
        </body>
      </html>
   </CartProvider>
  );
}
