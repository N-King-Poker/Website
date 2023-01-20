<template>
  <div>
    <h1>
      An error occurred - {{ getErrorMessage(error.statusCode) }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss" scoped>
</style>
