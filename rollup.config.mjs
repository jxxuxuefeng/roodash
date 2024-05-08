import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import clear from "rollup-plugin-clear";

const config = defineConfig([
  {
    // .d.ts build
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [
      clear({
        targets: ["dist"],
      }),
      dts(),
    ],
  },
  {
    // CJS build
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
      entryFileNames: "[name].cjs",
    },
    plugins: [typescript()],
  },
  {
    // ESM builds
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "es",
      entryFileNames: "[name].mjs",
    },
    plugins: [typescript()],
  },
]);

export default config;
