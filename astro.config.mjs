import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://cometrobotics.org',
  integrations: [react(), sitemap()],
  redirects: {
    '/give' : 'https://givingday.utdallas.edu/giving-day/83844/department/83967'
  }
});