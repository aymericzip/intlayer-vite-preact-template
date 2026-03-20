import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { intlayer, intlayerProxy } from "vite-intlayer";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    intlayer(),
    intlayerProxy(),
    tailwindcss(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
      template: "treemap", // 'sunburst' or 'network' are also available
      gzipSize: true, // Shows compressed size (closer to real-world transfer)
      brotliSize: true, // Shows brotli compressed size
      sourcemap: true, // CRITICAL: Uses sourcemaps to calculate exact minified sizes
    }),
  ],
  build: {
    sourcemap: true,
  },
});
