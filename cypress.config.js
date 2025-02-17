import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  viewportHeight: 900,
  viewportWidth: 1440
});
