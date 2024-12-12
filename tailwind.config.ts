import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [daisyui as any],
  theme: {
    extend: {
      colors: {
        leaf: {
          500: "#3bf686", // Example color
        },
        ocean: {
          500: "#4ca9ff", // Example color
        },
        active: "cornflowerblue",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
} satisfies Config;
