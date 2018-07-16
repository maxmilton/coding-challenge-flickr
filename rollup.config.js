import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'banner',
    file: 'dist/bundle.js',
  },
  plugins: [
    svelte({
      dev: !production,
      css: (css) => {
        css.write('dist/bundle.css');
      },
    }),

    resolve(),
    commonjs(),

    production && buble({
      include: [
        'src/**',
        'node_modules/svelte/shared.js',
        'node_modules/svelte/store.js',
      ],
    }),
    production && terser(),
  ],
};
