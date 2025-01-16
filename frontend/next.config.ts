import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "obrqxektxritcwgigdzw.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/static/**",
      },
    ],
  },
  /* other config options here */
};

export default nextConfig;