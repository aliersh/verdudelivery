import "@/styles/globals.css";

import { MedusaProvider } from "medusa-react";

import Footer from "../components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import { QueryClient } from "@tanstack/react-query";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MedusaProvider
            baseUrl="http://localhost:9000"
            queryClientProviderProps={{ client: queryClient }}
        >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </MedusaProvider>
    );
}
