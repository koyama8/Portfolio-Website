import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portfolio-Website/",
  cacheDir: ".vite-cache",
  plugins: [react()],
});
