import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import { sveltePreprocess } from 'svelte-preprocess';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ESLintWebpackPlugin from 'eslint-webpack-plugin';

export default {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte/src/runtime'),
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte', '.json'],
    conditionNames: ['svelte', 'browser', 'module', 'import'],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess({ postcss: true }),
            emitCss: true,
            // hotReload: true,
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    // new ESLintWebpackPlugin({
    //   // eslintPath: path.resolve(__dirname, 'eslint.config.mjs'),
    //   overrideConfigFile: path.resolve(__dirname, 'eslint.config.mjs'),
    //   context: path.resolve(__dirname, './src'),
    //   extensions: ['js','mjs','cjs','ts'],
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    // open: true,
  },
};