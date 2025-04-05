import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    name: 'ui-pack'
  },
  external: ['react', 'react-dom'],
  plugins: [typescript({tsconfig: 'tsconfig.json'})]
})