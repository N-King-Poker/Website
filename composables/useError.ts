import errorMessages from '~/composables/errorCode.json'
export const getErrorMessage = (code: string) => {
  for (const key in errorMessages) {
    if (key === code) {
      // @ts-ignore
      return errorMessages[key]
    }
  }
  return errorMessages.default
}
