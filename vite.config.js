// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default {
  build: {
    outDir: 'build' // Ensure this matches the gh-pages `-d` option
  }
};