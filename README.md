# svelt-demo
A demo devlopment environment of svelte with webpack, typescript, postcss, babel, tailwindcss and eslint.

# Steps

## Init
> npm init -y

## Install
> npm install --save-dev \
  webpack webpack-cli webpack-dev-server html-webpack-plugin \
  typescript ts-loader \
  postcss postcss-loader autoprefixer css-loader style-loader \
  svelte svelte-preprocess svelte-loader @tsconfig/svelte \
  globals \
  eslint eslint-webpack-plugin eslint-plugin-svelte @eslint/js typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @babel/eslint-parser \
  babel-loader @babel/core @babel/preset-env \
  tailwindcss

## ./webpack.config.js
* Init config
> npx webpack init

## ./tsconfig.json
> Init config
> tsc --init

## ./src/global.d.ts

## ./eslint.config.mjs
* Init config
> npx eslint --init

## babel.config.json

## tailwind.config.mjs

## postcss.config.mjs

## Refrences
* https://webpack.docschina.org/configuration
* https://createapp.dev/webpack
* https://willwillems.com/posts/tailwind-with-svelte-webpack.html
* https://tailwindcss.com/docs/guides/sveltekit
