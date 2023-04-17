<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="cards row row-cols-4 gap-4">
      <Card class="px-0" v-for="carro in carrosAVenda" :carro="carro" />
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
@media (min-width: 320px) and (max-width: 767px) {
  .cards {
    width: 288px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cards {
    width: 600px;
  }
}
@media (min-width: 1024px) {
  .cards {
    width: 912px;
  }
}
</style>
