// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', 'nuxt-icon', '@pinia/nuxt'],
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: ''
    },
    {
      path: '~/components/shared',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: ''
    },
    {
      path: '~/components',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: ''
    },
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'],
    }
  },
  runtimeConfig: {
    openaiKey: '',
    replicateKey: '',
    stripeSecret: '',
    stripeWebhookSecret: '',
    appUrl: '',
    public: {
      publicStripeKey: '',
    }
  }
})
