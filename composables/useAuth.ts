import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth'

export const createUser = async (email: string, password: string) => {
  const auth = getAuth()
  return await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return { errorCode, errorMessage }
    })
}

export const signIn = async (email: string, password: string) => {
  const auth = getAuth()
  return await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return { errorCode, errorMessage }
    })
}

export const logout = async () => {
  const auth = getAuth()
  await auth.signOut()
}

export const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email.'
    case 'auth/weak-password':
      return 'Password is too weak.'
    case 'auth/email-already-in-use':
      return 'Email is already in use.'
    case 'auth/wrong-password':
      return 'Wrong password.'
    case 'auth/user-not-found':
      return 'User not found.'
    default:
      return 'Something went wrong.'
  }
}
