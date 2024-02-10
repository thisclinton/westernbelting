import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_ANON_KEY": JSON.stringify(process.env.VITE_ANON_KEY),
    "process.env.VITE_SUPABASE_URL": JSON.stringify(
      process.env.VITE_SUPABASE_URL
    ),
  },
});
