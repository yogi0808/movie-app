import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src/",
      "@components": "/src/components/",
      "@constants": "/src/constants/",
      "@hooks": "/src/hooks/",
      "@layouts": "/src/layouts/",
      "@redux": "/src/redux/",
      "@screens": "/src/screens/",
      "@sections": "/src/sections/",
    },
  },
});
