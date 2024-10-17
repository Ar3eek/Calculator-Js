import { defineConfig } from 'vite'
import { resolve } from 'path'
import { compressImages, faviconsConfig, htmlPlugin, injectHtmlProd } from './vite.plugins'
import eslint from 'vite-plugin-eslint'
import { injectHTMLDev, webfontDownloadPlugin } from './vite.plugins'

export default defineConfig({
    root: './src',
    base: './',
    build: {
        outDir: resolve(__dirname, '../dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, '../src/index.html'),
            output: {
                entryFileNames: 'assets/js/[name].js',
                chunkFileNames: 'assets/js/[name].js',
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.')[1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/ttf|otf|woff2/i.test(extType)) {
                        extType = 'fonts';
                    } else {
                        extType = 'styles';
                    }

                    return `assets/${extType}/[name].[ext]`
                }
            },
        },
        target: 'es2020'
    },
    plugins: [
        compressImages,
        injectHtmlProd,
        faviconsConfig,
		webfontDownloadPlugin,
        htmlPlugin
    ]
})