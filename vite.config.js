import { fileURLToPath, URL } from 'node:url'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import externalize from 'vite-plugin-externalize-dependencies'
import vuetify from 'vite-plugin-vuetify'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  
  return {
    plugins: [
      federation({
        name: 'root',
        remotes: {
          yearly_app: env.VITE_YEARLY_APP_URL,
        },
        shared: ['vue', 'pinia', 'vuetify']
      }),
      vue(),
      vueDevTools(),
      externalize({
        externals: ['@shared/utility'],
      }),
      vitePluginSingleSpa({
        type: 'root',
        imo: '3.1.1',
      }),
      vuetify({
        autoImport: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        external: ['@shared/utility']
      }
    }
  }
})
