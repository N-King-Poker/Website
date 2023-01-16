<template>
  <div class="register-container">
    <div class="register-form">
      <h1 class="title">
        Login
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
            <input id="password-input" class="input" :class="{'is-danger': passwordError}" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock" />
            </span>
          </div>
          <p v-if="passwordError" class="help is-danger">
            {{ passwordError }}
          </p>
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
              <a href="#" @click="forgotPassword">Forgot password?</a>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button id="login-btn" class="button is-danger" @click="login">
          Login
        </button>
        <button class="button is-light" @click="cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { signIn } from '~/composables/useAuth'

definePageMeta({
  title: 'Login',
  layout: 'empty'
})

const route = useRoute()
const redirect = ref(route.query.redirect || '/')

const emailError = ref('')
const emailSuccess = ref(false)

const passwordError = ref('')

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
}

const login = async () => {
  const router = useRouter()
  const email = document.getElementById('email-input').value
  const password = document.getElementById('password-input').value
  const user = await signIn(email, password)
  if (user.errorCode) {
    if (user.errorCode.includes('email')) {
      emailError.value = getErrorMessage(user.errorCode)
    } else {
      emailSuccess.value = false
      passwordError.value = getErrorMessage(user.errorCode)
    }
  } else {
    useUser().value = user.user
    router.push(redirect.value)
  }
}

const cancel = () => {
  const router = useRouter()
  router.push('/')
}

const forgotPassword = () => {
  const router = useRouter()
  router.push('/forgot-password')
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

        #login-btn {
          background: #EF233C;
          margin-right: 20px;

          &:hover {
            background: #D90429;
          }
        }
      }
    }
  }
</style>
