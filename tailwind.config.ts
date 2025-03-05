import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        darkPrimary: "#101010",
        darkSecondary: "#1b1b1b",
        warning: {
          400: "#372810",
          900: "#fea109",
        },
        ErrorPrimary: "#dd371f",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        error: {
          100: "#F78D8F",
          200: "#F68082",
          300: "#F67476",
          400: "#F5686A",
          500: "#F34F52", // Main Error
          600: "#C94144",
          700: "#9E3335",
          800: "#732627",
          900: "#491819",
        },
        success: {
          100: "#82CB93",
          200: "#73C586",
          300: "#64BF78",
          400: "#27A644", // Main Success
          500: "#208938",
          600: "#196C2C",
          700: "#134F20",
          800: "#0C3214",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#B5A2F0",
          200: "#A18AEC",
          300: "#8D72E8",
          400: "#7A5BE3",
          500: "#7650CF", // Primary color
          600: "#5F41A7",
          700: "#493280",
          800: "#332458",
          900: "#1D152F",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
