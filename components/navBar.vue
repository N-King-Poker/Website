<template>
  <nav id="navbar-container" class="level is-mobile">
    <div class="level-left">
      <figure id="logo" class="image">
        <img src="~/assets/logo.png" alt="logo">
      </figure>
      <span id="title">
        <span>N</span>
        <span>-</span>
        <span>K</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </span>
    </div>
    <div class="level-item has-text-centered">
      <nuxt-link class="nav-link" to="/statistics">
        Statistics
      </nuxt-link>
      <span class="nav-spacer"> · </span>
      <nuxt-link class="nav-link" to="/tables">
        Tables
      </nuxt-link>
      <span class="nav-spacer"> · </span>
      <nuxt-link class="nav-link" to="/friends">
        Friends
      </nuxt-link>
    </div>
    <div class="level-right">
      <div v-if="!user" id="log-buttons" class="buttons">
        <nuxt-link id="login-button" to="/login" class="button">
          <strong>Log in</strong>
        </nuxt-link>
        <nuxt-link id="register-button" to="/register" class="button">
          Sign up
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script setup>

const user = ref(null)

</script>

<style lang="scss" scoped>
  #navbar-container {
    background-color: #2B2D42;
    color: #EDF2F4;
    padding: 0.5rem 1rem;
    height: 3.5rem;

    #logo {
      object-fit: contain;
      height: 2.5rem;

      img {
        height: 100%;
      }
    }

    #title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: 0.5rem;
      color: #EF233C;
      font-family: 'Roboto', sans-serif;

      @keyframes wave {
        0% {
          color: #EF233C;
          transform: translateY(0);
        }
        25% {
          color: #EDF2F4;
          transform: translateY(-0.5rem);
        }
        50% {
          color: #EF233C;
          transform: translateY(0);
        }
      }

      span {
        display: inline-block;
        animation: wave 5s infinite;
      }

      span:nth-child(1) {
        animation-delay: 0s;
      }
      span:nth-child(2) {
        animation-delay: 0.2s;
      }
      span:nth-child(3) {
        animation-delay: 0.4s;
      }
      span:nth-child(4) {
        animation-delay: 0.6s;
      }
      span:nth-child(5) {
        animation-delay: 0.8s;
      }
      span:nth-child(6) {
        animation-delay: 1s;
      }
    }

    .nav-link {
      color: #EDF2F4;
      font-size: 1.05rem;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      transition: all 0.2s ease-in-out;
      width: 6rem;

      &:hover {
        color: #EF233C;
        font-weight: 700;
      }
    }

    .nav-spacer {
      color: #A0AEC0;
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0.2rem 0.5rem;
    }

    #log-buttons {
      .button {
        background-color: #EF233C;
        border-radius: 0.25rem;
        border-color: transparent;
        color: #EDF2F4;
        font-size: 1.05rem;
        font-weight: 600;
        padding: 0.5rem 0.75rem;
        transition: all 0.2s ease-in-out;
        width: 6rem;

        &:hover {
          background-color: transparent;
          color: #EF233C;
        }
      }

      #login-button {
        background-color: transparent;
      }

      #register-button:hover {
        background-color: #D90429;
        color: #EDF2F4;
      }
    }

  }
</style>
