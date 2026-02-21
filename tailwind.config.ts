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
        "gray-block": "#7B7869",
        "gray-block-mid": "#737060",
        "gray-block-light": "#82806F",
        "white-block": "#F0EDE8",
        "ink-black": "#0F0F0F",
        "mortar-gray": "#5A5749",
        "mortar-light": "#D8D3CB",
        "flash-red": "#C41E1E",
        "off-white": "#FFFDF8",
        "shop-black": "#111111",
        // Mint green from shop interior wainscoting
        "shop-mint": "#8BBFAD",
        "shop-mint-light": "#A8D5C4",
        "shop-mint-dark": "#6A9E8C",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drawerIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        drawerOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        "drawer-in": "drawerIn 0.3s ease-out forwards",
        "drawer-out": "drawerOut 0.3s ease-in forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
