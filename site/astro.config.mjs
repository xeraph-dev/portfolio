import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import astroI18next from "astro-i18next";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://xeraph.dev",
  vite: {
    build: {
      rollupOptions: {
        external: ["shiki/themes/hc_light.json"]
      }
    }
  },
  integrations: [
    tailwind(),
    compress(),
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    mdx(),
    astroI18next(),
    svelte(),
  ],
});
