<script setup lang="ts">
import VButtonPrimary from './components/VButtonPrimary.vue';
import VH1 from './components/VH1.vue';
</script>

<template>
  <VH1>Este es el título</VH1>
  <VButtonPrimary>VButtonPrimary</VButtonPrimary>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
