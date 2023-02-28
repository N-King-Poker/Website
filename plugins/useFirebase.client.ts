import { initializeApp } from 'firebase/app'
import { getAnalytics } from '@firebase/analytics'
import { defineNuxtPlugin } from '#app'
import { getAuth } from '@firebase/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const configObject = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId
  }

  const firebaseApp = initializeApp(configObject)
  const analytics = getAnalytics(firebaseApp)
  const auth = getAuth(firebaseApp)

  nuxtApp.provide('firebaseApp', firebaseApp)
  nuxtApp.provide('analytics', analytics)
  nuxtApp.provide('auth', auth)
  nuxtApp.vueApp.provide('firebaseApp', firebaseApp)
  nuxtApp.vueApp.provide('analytics', analytics)
  nuxtApp.vueApp.provide('auth', auth)
})
