import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Configuration for development mode
  dev: {
    build: {
      outDir: "build-dev",
    },
    server: {
      port: 3000,
      open: true,
    },
  },

  // Configuration for production mode
  build: {
    outDir: "build-prod",
    minify: true,
    sourcemap: false,
  },

  // Shared configuration for both modes
  plugins: [react()],

  // Resolve aliases for imports
  resolve: {
    alias: {
      "@": "/public",
      "#": "/src"
    },
  },

  // CSS configuration
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
