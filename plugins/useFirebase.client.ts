import { initializeApp } from 'firebase/app'
import { getAnalytics } from '@firebase/analytics'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseApp = initializeApp(config.firebase)
  const analytics = getAnalytics(firebaseApp)

  nuxtApp.provide('firebaseApp', firebaseApp)
  nuxtApp.provide('analytics', analytics)
})
