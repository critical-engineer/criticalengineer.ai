import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://criticalengineer.ai',
  output: 'static',
  vite: {
    ssr: {
      external: ['markdown-it']
    }
  }
});
