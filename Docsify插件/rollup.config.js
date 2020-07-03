import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';


const plugins = [
    postcss({
        minimize: true,
        extensions: ['.css'],
    }),
    babel({
        exclude: ['node_modules/**'],
        presets: [
            [
                '@babel/env', {
                    modules: false,
                    targets: 'last 2 versions, ie >= 10'
                }
            ]
        ]
    }),
    uglify()
]

export default [{
    input: "./src/catalog/index.js",
    output: {
        file: "./dist/catalog.js",
        format: "iife"
    },
    plugins: plugins
},{
    input: "./src/sidebar/index.js",
    output: {
        file: "./dist/sidebar.js",
        format: "iife"
    },
    plugins: plugins
}];