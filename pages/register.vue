<template>
  <div class="register-container">
    <div class="register-form">
      <h1 class="title">
        Register
      </h1>
      <div class="fields">
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              id="email-input"
              class="input"
              :class="{'is-danger': emailError, 'is-success': emailSuccess}"
              type="email"
              placeholder="Email"
              @input="onEmailChange"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
          </div>
          <p v-if="emailError" class="help is-danger">
            {{ emailError }}
          </p>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              id="password-input"
              class="input"
              :class="{'is-danger': passwordError, 'is-success': passwordSuccess}"
              type="password"
              placeholder="Password"
              @input="passwordChanged"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input
              id="password-repeat-input"
              class="input"
              :class="{'is-danger': passwordError, 'is-success': passwordSuccess}"
              type="password"
              placeholder="Repeat password"
              @input="passwordChanged"
            >
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
          </div>
          <p v-if="passwordError" class="help is-danger">
            {{ passwordError }}
          </p>
        </div>
        <div class="field">
          <progress class="progress is-danger" :value="passwordScore" max="100">
            {{ passwordScore }}%
          </progress>
        </div>
        <div class="controls">
          <!-- Remember me checkbox and forgot password link -->
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input id="terms" type="checkbox" @click="updateProgress">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button id="register-btn" class="button is-danger" :disabled="!isEverythingValid" @click="register">
          Register
        </button>
        <button class="button is-light" @click="cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import {createUser, signIn} from '~/composables/useAuth'

definePageMeta({
  title: 'Login',
  layout: 'empty'
})

const route = useRoute()
const redirect = ref(route.query.redirect || '/')

const emailError = ref('')
const emailSuccess = ref(false)

const passwordError = ref('')
const passwordSuccess = ref(false)

const isEverythingValid = ref(false)
const passwordScore = ref(0)

const updateProgress = () => {
  const terms = document.getElementById('terms').checked
  const password = document.getElementById('password-input').value
  const repeatPassword = document.getElementById('password-repeat-input').value
  isEverythingValid.value = terms && emailSuccess && password === repeatPassword
}

const onEmailChange = () => {
  const email = document.getElementById('email-input').value
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (regex.test(email)) {
    emailError.value = ''
    emailSuccess.value = true
  } else if (email.length > 0) {
    emailError.value = 'Please enter a valid email'
    emailSuccess.value = false
  } else {
    emailError.value = ''
    emailSuccess.value = false
  }
  updateProgress()
}

const scorePassword = (password) => {
  let score = 0
  if (!password) {
    return score
  }

  // award every unique letter until 5 repetitions
  const letters = {}
  for (let i = 0; i < password.length; i++) {
    letters[password[i]] = (letters[password[i]] || 0) + 1
    score += 5.0 / letters[password[i]]
  }

  // bonus points for mixing it up
  const variations = {
    digits: /\d/.test(password),
    lower: /[a-z]/.test(password),
    upper: /[A-Z]/.test(password),
    nonWords: /\W/.test(password)
  }

  let variationCount = 0
  for (const check in variations) {
    variationCount += (variations[check] === true) ? 1 : 0
  }
  score += (variationCount - 1) * 10

  return parseInt(score)
}

const passwordChanged = () => {
  const password = document.getElementById('password-input').value
  const repeatPassword = document.getElementById('password-repeat-input').value
  passwordScore.value = scorePassword(password)
  if (password.length > 0 && password !== repeatPassword) {
    passwordError.value = 'Passwords do not match'
    passwordSuccess.value = false
  } else if (password.length > 0 && passwordScore.value < 50) {
    passwordError.value = 'Password is too weak'
    passwordSuccess.value = false
  } else {
    passwordError.value = ''
    passwordSuccess.value = true
  }
  updateProgress()
}

const register = async () => {
  const router = useRouter()
  const email = document.getElementById('email-input').value
  const password = document.getElementById('password-input').value
  const user = await createUser(email, password)
  if (user.errorCode) {
    if (user.errorCode.includes('email')) {
      emailError.value = getErrorMessage(user.errorCode)
    } else {
      emailSuccess.value = false
      passwordError.value = getErrorMessage(user.errorCode)
    }
  } else {
    useUser().value = user.user
    router.push(redirect.value === '/login' ? '/' : redirect.value)
  }
}

const cancel = () => {
  const router = useRouter()
  router.push(redirect.value)
}

</script>

<style lang="scss" scoped>

.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #EDF2F4;

  .register-form {
    width: 400px;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;

    .buttons {
      margin-top: 10px;

      #register-btn {
        background: #EF233C;
        margin-right: 20px;
        width: 70%;

        &:hover {
          background: #D90429;
        }
      }
    }
  }
}
</style>
