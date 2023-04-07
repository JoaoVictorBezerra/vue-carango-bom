<template>
  <div class="container">
    <div class="d-flex flex-column flex-md-row flex-md-wrap gap-4 align-items-center justify-content-md-center">
      <div v-for="carro in carrosAVenda">
        <Card :carro="carro" />
      </div>
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
    resposta = resposta.dados
    carrosAVenda.value = resposta;
  });
});
</script>
