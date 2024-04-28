import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir:
      "D:/dev-server/mods/deathmatch/resources/[lowpixel]/[gamemode]/pixel_fisher/assets/nui",
    assetsDir: "assets",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: "app.js",
      },
    },
  },
});
