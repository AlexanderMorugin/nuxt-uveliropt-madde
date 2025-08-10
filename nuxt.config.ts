// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],

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

  modules: ['@nuxt/image'],
});