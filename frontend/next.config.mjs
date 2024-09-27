/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "localhost",
            "medusa-public-images.s3.eu-west-1.amazonaws.com",
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vgefhivfjoaxzlsbtkbp.supabase.co",
                pathname: "/storage/v1/object/public/**", // Allow access to any objects in your S3 bucket
            },
        ],
    },
};

export default nextConfig;
