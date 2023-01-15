import { initializeApp } from 'firebase/app'
import { getAnalytics } from '@firebase/analytics'
import { defineNuxtPlugin } from '#app'
import { getAuth } from '@firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseApp = initializeApp(config.firebase)
  const analytics = getAnalytics(firebaseApp)
  const auth = getAuth(firebaseApp)

  nuxtApp.provide('firebaseApp', firebaseApp)
  nuxtApp.provide('analytics', analytics)
  nuxtApp.provide('auth', auth)
})
