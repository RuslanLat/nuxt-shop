// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi', '@pinia/nuxt'],
  css: ['@fontsource-variable/montserrat'],
  pinia: {
    storesDirs: ['./stores/*'],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
    }
  }
})