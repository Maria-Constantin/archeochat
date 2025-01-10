import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const currentDir = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "${join(currentDir, './src/styles/main.scss')}" as *;`,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: '$1',
      },
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-bootstrap', 'react-router'],
  },
  define: {
    'process.env': process.env
  },
  silenceDeprecations: ['mixed-decls']
})
