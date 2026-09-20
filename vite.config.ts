import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const rawBase = process.env.BASE_PATH;
const base = rawBase
  ? rawBase.endsWith("/")
    ? rawBase
    : `${rawBase}/`
  : process.env.NODE_ENV === "production"
    ? "/Vithuran-Sadagopan/"
    : "/";

export default defineConfig({
  plugins: [solid()],
  base,
});
