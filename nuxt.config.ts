import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'N-King',
      script: [
        {
          src: 'https://kit.fontawesome.com/b7be93d361.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
