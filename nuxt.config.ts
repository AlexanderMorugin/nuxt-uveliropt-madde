// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  compatibilityDate: '2025-07-15',

  devtools: { enabled: false },
  css: ['~/assets/fonts.css', '~/assets/variables.css', '~/assets/global.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  modules: ['@nuxt/fonts'],
});