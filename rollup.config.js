import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svg from 'rollup-plugin-svg';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

const isProd = process.env.NODE_ENV === "production";

export default {
    input: './src/index.js',
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: !isProd
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: !isProd
        }
    ],
    plugins: [
        svg(),
        peerDepsExternal(),
        babel(),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
        resolve(),
        commonjs(),
        isProd && terser(),
    ]
};
