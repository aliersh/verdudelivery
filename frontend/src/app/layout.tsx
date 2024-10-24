import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ReactNode } from "react";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body className="flex justify-center">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
