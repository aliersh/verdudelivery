import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';

import Navbar from '@/components/layout/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
