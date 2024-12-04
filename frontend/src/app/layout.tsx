import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';

import CartDrawer from '@/components/feature/cart/CartDrawer';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navigation/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/lib/contexts/CartContext';
import { CustomerProvider } from '@/lib/contexts/CustomerContext';
import { RegionProvider } from '@/lib/contexts/RegionContext';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <RegionProvider>
                    <CustomerProvider>
                        <CartProvider>
                            <Navbar />
                            {children}
                            <Toaster />
                            <CartDrawer />
                            <Footer />
                        </CartProvider>
                    </CustomerProvider>
                </RegionProvider>
            </body>
        </html>
    );
}
