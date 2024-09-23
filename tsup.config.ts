import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	minify: true,
	dts: true,
	splitting: false,
	sourcemap: false,
	clean: true,
});
