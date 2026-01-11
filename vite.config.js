import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/hb/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                quem_somos: resolve(__dirname, 'quem-somos.html'),
            },
        },
    },
})
