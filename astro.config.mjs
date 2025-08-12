// @ts-check
import { defineConfig } from "astro/config";

import db from "@astrojs/db";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [
    db(),
    favicons({
      input: {
        favicons: ["public/favicon.png"],
      },
      name: "Lena Promotion",
    }),
  ],
});
