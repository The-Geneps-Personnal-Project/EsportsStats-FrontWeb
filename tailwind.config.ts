import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        100: "#f0f4ff", // Lightest shade
        200: "#d9e6ff",
        300: "#a6c1ff",
        400: "#598bff",
        500: "#2404a8", // Base color
        600: "#0e0195",
        700: "#070c81",
        800: "#03076e",
        900: "#01035a", // Darkest shade
      },
      secondary: {
        100: "#f9e8e9", // Lightest shade
        200: "#f0c1c6",
        300: "#e5999f",
        400: "#d97279",
        500: "#D51D27", // Base color
        600: "#b01922",
        700: "#8c141c",
        800: "#660f17",
        900: "#400a11", // Darkest shade
      },
      tertiary: {
        100: "#757575", // Lightest shade
        200: "#545454",
        300: "#333333",
        400: "#1f1f1f",
        500: "#141414", // Base color
        600: "#0f0f0f",
        700: "#0b0b0b",
        800: "#080808",
        900: "#050505", // Darkest shade
      },
    },
  },
  plugins: [],
};
export default config;
