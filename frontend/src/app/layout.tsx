'use client';

import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import CartDrawer from '@/components/feature/cart/CartDrawer';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navigation/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/lib/contexts/CartContext';
import { CustomerProvider } from '@/lib/contexts/CustomerContext';
import { RegionProvider } from '@/lib/contexts/RegionContext';

const RootLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isAuthPage = pathname?.startsWith('/auth');

    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <RegionProvider>
                    <CustomerProvider>
                        <CartProvider>
                            {!isAuthPage && <Navbar />}
                            {children}
                            <Toaster />
                            <CartDrawer />
                            {!isAuthPage && <Footer />}
                        </CartProvider>
                    </CustomerProvider>
                </RegionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
