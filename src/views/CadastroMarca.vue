<template>
  <div class="container d-flex align-items-center justify-content-center">
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <RouterLink to="/marcas/listar" class="nav-link">Listar Marcas</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/marcas/cadastrar" class="nav-link">Adicionar marca</RouterLink>
          </li>
      </ul>
    </nav>
  </div>
<RouterView />
</template>

<script setup lang="ts">
import TabelaMarcas from '@/components/CadastroMarca/_Table.vue'
</script>
