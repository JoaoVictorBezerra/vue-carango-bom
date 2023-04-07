<template>
  <nav class="navbar bg-grey navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Carango Bom</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="!usuarioLogado" to="/login" class="nav-link"
              >Login</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink v-if="usuarioLogado" to="/dashboard" class="nav-link"
              >Dashboard</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="usuarioLogado"
              to="/marcas/listar"
              class="nav-link"
              >Marcas</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="usuarioLogado"
              to="/veiculos/listar"
              class="nav-link"
              >Veículos</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="usuarioLogado"
              to="/sair"
              class="nav-link"
              >Sair</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
// Vue
import { computed } from "vue";

// Store
import { useUsuarioStore } from "@/store/usuario-store";

// Variáveis
const usuarioStore = useUsuarioStore();

const usuarioLogado = computed(() => {
  return usuarioStore.usuario.nome == '' ? false : true;
});

const nomeUsuario = computed(() => {
  return usuarioStore.usuario.nome == '' ? 'Menu' : 'Olá, ' + usuarioStore.usuario.nome
})

</script>
<style>

</style>