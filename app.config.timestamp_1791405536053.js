// app.config.ts
import { defineConfig } from "@solidjs/start/config";
var rawBase = process.env.BASE_PATH;
var base = rawBase ? rawBase.endsWith("/") ? rawBase : `${rawBase}/` : process.env.NODE_ENV === "production" ? "/Vithuran-Sadagopan/" : "/";
var app_config_default = defineConfig({
  server: {
    prerender: {
      routes: ["/"],
      crawlLinks: true
    },
    baseURL: base
  }
});
export {
  app_config_default as default
};
