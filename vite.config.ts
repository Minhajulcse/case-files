import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/data/cases/case')) return 'case-records';
        }
      }
    }
  },
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
