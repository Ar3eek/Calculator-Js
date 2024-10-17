/* eslint-disable */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { injectHTMLDev, webfontDownloadPlugin } from './vite.plugins';

export default defineConfig({
    root: './src',
    base: './',
    build: {
        rollupOptions: {
            input: resolve(__dirname, '../src/index.html'),
        },
    },
    plugins: [injectHTMLDev, webfontDownloadPlugin],
});
