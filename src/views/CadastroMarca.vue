<template>
  <div class="container d-flex align-items-center justify-content-center">
    <nav>
      <ul class="nav">
        <li class="nav-item px-5">
          <RouterLink to="/marcas/listar" class="btn btn-secondary">Listar Marcas</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/marcas/cadastrar" class="btn btn-secondary">Adicionar marca</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import TabelaMarcas from '@/components/CadastroMarca/_Table.vue'
</script>
