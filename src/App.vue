<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header class="pb-5">
    <Navbar />
  </header>
  <main class="my-5">
    <RouterView />
  </main>
</template>