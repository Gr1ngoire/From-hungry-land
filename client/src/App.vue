<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <header>
    <Header></Header>
  </header>

  <main>
    <router-view> </router-view>
  </main>

  <footer></footer>
</template>
