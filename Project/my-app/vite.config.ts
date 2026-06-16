import react from "@vitejs/plugin-react"
import * as path from "node:path"
import { defineConfig } from "vitest/config"
import packageJson from "./package.json" with { type: "json" }

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    reportCompressedSize: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/styles/_variables.scss";
          @import "/src/styles/_mixins.scss";
        `
      }
    }
  },

  server: {
    open: true,
  },

  test: {
    root: import.meta.dirname,
    name: packageJson.name,
    environment: "jsdom",

    typecheck: {
      enabled: true,
      tsconfig: path.join(import.meta.dirname, "tsconfig.json"),
    },

    globals: true,
    watch: false,
    setupFiles: ["./src/setupTests.ts"],
  },
})
