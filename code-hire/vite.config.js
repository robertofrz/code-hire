import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/code-hire/", // Certifique-se de que isso está aqui para GitHub Pages
});
