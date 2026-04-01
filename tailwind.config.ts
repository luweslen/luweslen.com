import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{vue}",
    "./components/**/*.{vue}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
} satisfies Config;
