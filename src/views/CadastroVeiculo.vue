<template>
  <div class="container d-flex align-items-center justify-content-center">
    <nav>
      <ul class="nav">
        <li class="nav-item pe-5">
          <RouterLink to="/veiculos/listar" class="btn btn-secondary">Listar Veículos</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/veiculos/cadastrar" class="btn btn-secondary">Adicionar Veículos</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
</script>
