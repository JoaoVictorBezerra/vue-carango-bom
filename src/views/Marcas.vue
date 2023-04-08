<template>
  <div class="container d-flex align-items-center justify-content-center">
    <nav>
      <ul class="nav gap-2">
        <li class="nav-item">
          <BotaoRota rota="/marcas/listar" titulo="Listar Marcas"/>
        </li>
        <li class="nav-item">
          <BotaoRota rota="/marcas/cadastrar" titulo="Adicionar marca"/>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import BotaoRota from '@/components/Button.vue';
</script>
