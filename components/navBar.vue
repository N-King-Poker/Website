<template>
  <nav id="navbar-container" class="level is-mobile">
    <NuxtLink class="level-left" to="/">
      <figure id="logo" class="image">
        <img src="~/assets/logo.png" alt="logo">
      </figure>
      <span v-if="!isMobile" id="title">
        <span>N</span>
        <span>-</span>
        <span>K</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </span>
    </NuxtLink>
    <div v-if="!isMobile" class="level-item has-text-centered">
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
    <div id="account-item" class="level-right">
      <div v-if="!user" id="log-buttons" class="buttons">
        <nuxt-link id="login-button" to="/login" class="button">
          <strong>Log in</strong>
        </nuxt-link>
        <nuxt-link id="register-button" to="/register" class="button">
          Sign up
        </nuxt-link>
      </div>
      <div v-else>
        <div id="account-dropdown" class="dropdown is-hoverable is-right">
          <div id="account-trigger" class="dropdown-trigger">
            <span class="icon-text " aria-haspopup="true" aria-controls="dropdown-menu">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true" />
              </span>
              <span v-if="!isMobile" id="account-name">{{ user.username }}</span>
            </span>
            <figure id="account-figure" class="image">
              <img id="account-image" :src="user.avatar" class="is-rounded" alt="account">
            </figure>
          </div>
          <div id="dropdown-menu" class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <NuxtLink href="#" class="dropdown-item">
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-user" aria-hidden="true" />
                  </span>
                  <span>Profile</span>
                </span>
              </NuxtLink>
              <NuxtLink href="#" class="dropdown-item">
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-cog" aria-hidden="true" />
                  </span>
                  <span>Settings</span>
                </span>
              </NuxtLink>
              <hr class="dropdown-divider">
              <a class="dropdown-item icon-text">
                <span class="icon">
                  <i class="fas fa-sign-out-alt" aria-hidden="true" />
                </span>
                <span>Log out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

const user = ref(null)

const isMobile = ref(false)

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

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
        10% {
          color: #EDF2F4;
          transform: translateY(-0.2rem);
        }
        20% {
          color: darken(#EF233C, 10);
          transform: translateY(0);
        }
        100% {
          color: #EF233C;
          transform: translateY(0);
        }
      }

      span {
        display: inline-block;
        animation: wave 5s infinite ease-in-out;
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

    #account-item {
      width: 15rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;

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

      #account-dropdown {
        #account-trigger {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-right: 0.5rem !important;
          width: 100%;
          object-fit: contain;
          height: 2.5rem;

          #account-figure {
            margin-left: 0.5rem;
            height: 2.5rem;
            width: 2.5rem;
            object-fit: cover;

            #account-image {
              margin-left: 0.5rem;
              object-fit: cover;
            }
          }

          .icon-text {
            font-size: 1.05rem;
            font-weight: 600;
            color: #EDF2F4;
          }
        }
      }
    }

  }
</style>
