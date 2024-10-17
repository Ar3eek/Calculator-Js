/* eslint-disable */
import { faviconsPlugin } from '@darkobits/vite-plugin-favicons';
import viteImagemin from 'vite-plugin-imagemin';
import injectHTML from 'vite-plugin-html-inject';
import { createHtmlPlugin } from 'vite-plugin-html';
import webfontDownload from 'vite-plugin-webfont-dl';

export const faviconsConfig = faviconsPlugin({
    appName: 'App name',
    appDescription: 'App description',
    background: '#fff',
    theme_color: '#000',
    appleStatusBarStyle: 'black-translucent',
    icons: {
        favicons: {
            source: './favicon.png',
        },
        appleIcon: {
            source: './favicon.png',
        },
    },
});

export const compressImages = viteImagemin({
    mozjpeg: {
        quality: 90,
    },
});

export const injectHTMLDev = injectHTML();

export const injectHtmlProd = injectHTML();

export const htmlPlugin = createHtmlPlugin({
    minify: true,
});

export const webfontDownloadPlugin = webfontDownload(
    [],
    {
      injectAsStyleTag: true,
      minifyCss: false,
      async: false,
      cache: true
    }
);
