import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), qrcode() ],
  server: {
    host: true,
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
