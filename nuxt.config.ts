// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel', // Spécifique à Netlify
  },

  // https://nuxt.com/modules
  modules: ['@nuxt/eslint', 'nuxt-svgo', '@nuxt/image', 'nuxt-viewport'],

  viewport: {
    breakpoints: {
      xs: 0,       // Extra small devices (e.g., phones)
      sm: 640,     // Small devices (e.g., tablets in portrait)
      md: 768,     // Medium devices (e.g., tablets in landscape)
      lg: 1024,    // Large devices (e.g., desktops)
      xl: 1280,    // Extra large devices (e.g., large desktops)
      '2xl': 1536, // Ultra large devices
    },
  },

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  image: {
    quality: 40,
    formats: ['webp', 'avif'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  css: ['~/assets/main.css'],

  routeRules: {
    "/spa-guerlain": {
      redirect: "/spa-guerlain/le-spa",
    },
  },
})