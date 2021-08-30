// @ts-check - enable TS check for js file
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{js,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      colors: {
        red: "#f00",
      },
    },
  },
});
