import {defineConfig} from 'vite'
import Vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Vue(),
        VitePWA({
            mode: "production",
            base: '/',
            registerType: 'autoUpdate',
            lang: 'ru',
            includeAssets: ['favicon.svg'], // <== don't add slash, for testing
            manifest: {
                name: 'Honar club',
                short_name: 'Honar club',
                description: "Вместе со спортивным клубом каратэ \"Гонар\" Вашего ребенка ждут увлекательные " +
                    "тренировки, адаптированные к его возрасту, аттестации на ученические квалификационные степени " +
                    "(пояса), участие в республиканских и международных соревнованиях, факультативные занятия с" +
                    " юристом и психологом, возможность попробовать себя в спортивной карьере или получить " +
                    "полезное хобби на всю жизнь.",
                start_url: '.',
                display: "standalone",
                orientation: "portrait",
                theme_color: 'white',
                icons: [
                    {
                        src: './icons/pwa-192x192.png', // <== don't add slash, for testing
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: './icons/pwa-512x512.png', // <== don't remove slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: './icons/pwa-512x512.png', // <== don't add slash, for testing
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: './icons/apple-touch-icon.png', // <== don't add slash, for testing
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
            workbox: {
                globPatterns: [],
            }
        })
    ],
    build: {
        sourcemap: process.env.SOURCE_MAP === 'true',
        rollupOptions: {
            plugins: [],
        },
    },
})
