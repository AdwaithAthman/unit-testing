import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // globals: true, then no need of importing describe, it, expect,test on every page
    environment: "jsdom",
    setupFiles: "./src/setUpTests.js"
  }
})
