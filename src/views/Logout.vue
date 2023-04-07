<template>
<h2 class="text-center">Aguarde alguns segundos até você ser redirecionado a home!</h2>
</template>
<script setup lang="ts">

// Store
import { useUsuarioStore } from '@/store/usuario-store';

// Router
import { useRouter } from 'vue-router';
const router = useRouter()

function deslogar() : void {
  sessionStorage.removeItem('token')
  const usuarioStore = useUsuarioStore();
	usuarioStore.limpa()
  setTimeout(() => {
    router.push('/')
  }, 3000);
}
deslogar();

</script>