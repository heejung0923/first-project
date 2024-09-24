import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    _global: {},
  },
  server: {
    https: true,
    port: 3100,
    open: true,
  },
});
