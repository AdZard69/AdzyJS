// vite.config.js in adzyjs package
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@react-three/fiber",
        "@react-three/drei",
        "three",
      ],
    },
  },
});
