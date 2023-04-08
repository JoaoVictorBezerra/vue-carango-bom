<template>
  <div class="container d-flex align-items-center justify-content-center">
    <nav>
      <ul class="nav gap-2">
        <li class="nav-item">
          <BotaoRota rota="/veiculos/listar" titulo="Listar Veículos"/>
        </li>
        <li class="nav-item">
          <BotaoRota rota="/veiculos/cadastrar" titulo="Adicionar Veículos"/>
        </li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import BotaoRota from '@/components/Button.vue';
</script>
