import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

const LIVE_URL = "https://psanchez-it.github.io" 

const BASE = "/allmylinks-main"


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: LIVE_URL,
  base: BASE,
  prefetch: true
});