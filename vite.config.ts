import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api-proxy': {
        target: 'https://api.agents.snsihub.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-proxy/, '')
      },
      '/webhook-proxy': {
        target: 'https://api.agents.snsihub.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/webhook-proxy/, '/webhook')
      },
      '/webhook-test-proxy': {
        target: 'https://api.agents.snsihub.ai',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/webhook-test-proxy/, '/webhook-test')
      }
    }
  }
});
