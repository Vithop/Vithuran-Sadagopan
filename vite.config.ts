import { defineConfig } from "vite";
import { solidStart } from "@solidjs/start/config";
import { nitro } from "nitro/vite";

const rawBase = process.env.BASE_PATH;
const base = rawBase
  ? rawBase.endsWith("/")
    ? rawBase
    : `${rawBase}/`
  : process.env.NODE_ENV === "production"
    ? "/Vithuran-Sadagopan/"
    : "/";

export default defineConfig({
  plugins: [
    solidStart({ ssr: true }),
    nitro({
      prerender: {
        routes: [base],
        crawlLinks: true
      }
    })
  ],
  base,
});
