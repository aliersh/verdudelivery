import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";

import CartDrawer from "@/components/cart/CartDrawer";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navigation/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { RegionProvider } from "@/contexts/RegionContext";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <RegionProvider>
                    <CartProvider>
                        <Navbar />
                        {children}
                        <Toaster />
                        <CartDrawer />
                        <Footer />
                    </CartProvider>
                </RegionProvider>
            </body>
        </html>
    );
}
