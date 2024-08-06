import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                "dark-green": "rgb(var(--color-dark-green) / <alpha-value>)",
                "light-green": "rgb(var(--color-light-green) / <alpha-value>)",
                white: "rgb(var(--color-white) / <alpha-value>)",
                gray: "rgb(var(--color-gray) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
export default config;
