import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'

export const createUser = async (email: string, password: string) => {
  const auth = getAuth()
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return { errorCode, errorMessage }
    })
}

export const signIn = async (email: string, password: string) => {
  const auth = getAuth()
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      return userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return { errorCode, errorMessage }
    })
}
