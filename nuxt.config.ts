// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    'nuxt-plotly'
  ],
  ssr: false,
  typescript: {
    strict: true
  },
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  }
})
