export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: './alpine',

  modules: ['@nuxt/devtools', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Prata: true,
      OpenSans: true
    },
    download: true
  },
})