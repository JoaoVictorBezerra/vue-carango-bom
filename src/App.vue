<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token');
    if (!to.meta?.public) {
      if (!token) {
        return next({ path: '/login' })
      }
    }
    return next()
})
</script>

<template>
  <header class="pb-5">
    <Navbar />
  </header>
  <main class="my-5">
    <RouterView />
  </main>
  <Footer />
</template>
