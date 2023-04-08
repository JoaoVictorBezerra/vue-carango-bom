<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useRouter } from 'vue-router';

const tokenAtivo = sessionStorage.getItem('token');
const router = useRouter();
router.beforeEach((to, from, next) => {
    if (!to.meta?.public) {
      if (!tokenAtivo) {
        return next({ path: '/login' })
      }
    }
    return next()
})

// Mudando título das rotas
router.afterEach((to, from) => {
    document.title = to.meta.title as string
})

</script>

<template>
  <header class="mb-5">
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
<style scoped>
</style>
