<template>
  <div id="master-container">
    <div id="navbar">
      <nav-bar />
    </div>
    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/components/navBar.vue'
</script>

<style lang="scss" scoped>
#master-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
    height: 100%;
    width: 100%;
    margin: 0 0;
  }

  #navbar {
    flex: 0;
  }
}
</style>
