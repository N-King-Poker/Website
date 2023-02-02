<template>
  <div>
    <nav-bar />
    <div class="center has-background-light">
      <div class="has-text-centered">
        <progress class="progress is-small is-danger" max="100">
          0
        </progress>
        <p class="title is-2">
          An error occurred
        </p>
        <p class="title is-1">
          - {{ error.statusCode }} -
        </p>
        <p class="subtitle is-3">
          {{ getErrorMessage(error.statusCode) }}
        </p>
        <div class="is-3">
          <progress class="progress is-small is-danger" max="100">
            0
          </progress>
        </div>
        <NuxtLink class="button margin light_red is-inverted" to="/">
          Home Page
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss" scoped>
@import 'bulma/bulma.sass';

.margin {
  margin-top: 20px;
  margin-bottom: 30px;
}

.light_red {
  color: #ef233c;
  border-color: #ef2e55;
  background-color: #ffecec;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>
