import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

const config = defineConfig([
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [typescript()],
  },
]);

export default config;
