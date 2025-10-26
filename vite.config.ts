import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { intlayer, intlayerProxy } from "vite-intlayer";

// https://vite.dev/config/
export default defineConfig({
	plugins: [preact(), intlayer(), intlayerProxy(), tailwindcss()],
});
