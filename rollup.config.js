import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "es",
      sourcemap: true,
      preserveModules: false, // <- Important
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({ babelHelpers: "bundled", extensions: [".js", ".ts", ".tsx"] }),
  ],
});
