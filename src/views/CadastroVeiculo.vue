<template>
  <div class="container d-flex align-items-center justify-content-center">
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <RouterLink to="/veiculos/listar" class="nav-link">Listar Veículos</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/veiculos/cadastrar" class="nav-link">Adicionar Veículos</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
</script>
