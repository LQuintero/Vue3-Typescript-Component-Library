import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import bundleScss from 'rollup-plugin-bundle-scss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/index.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/index.js'
      }
    ],
    plugins: [
      peerDepsExternal(),
      typescript(),
      vue(),
      bundleScss()
    ]
  }
]