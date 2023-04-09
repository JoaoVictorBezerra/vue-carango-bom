<template>
  <div class="container">
    <div class="d-flex flex-md-row flex-wrap gap-4 justify-content-center">
      <Card v-for="carro in carrosAVenda" :carro="carro" />
    </div>
  </div>
</template>
<script setup lang="ts">
// Vue
import { ref, onBeforeMount } from "vue";

// Componentes
import * as VeiculoService from "@/services/veiculos-service";

// Componentes
import Card from "./_Card.vue";

const carrosAVenda = ref([]);

// Funções
onBeforeMount(() => {
  VeiculoService.listarVeiculos().then((resposta) => {
    resposta = resposta.dados;
    carrosAVenda.value = resposta;
  });
});
</script>
<style scoped>
</style>
