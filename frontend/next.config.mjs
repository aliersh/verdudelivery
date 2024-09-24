/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "localhost",
            "medusa-public-images.s3.eu-west-1.amazonaws.com",
        ],
    },
};

export default nextConfig;
