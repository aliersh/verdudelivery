import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';

import { CartProvider } from '@/contexts/CartContext';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navigation/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <CartProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
