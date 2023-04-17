<template>
    <div class="cards d-flex flex-wrap gap-4">
      <Card v-for="marca in marcas" :marca="marca" />
  </div>
</template>
<script setup lang="ts">
// Vue
import { ref, onMounted } from "vue";

// Components
import Card from "@/components/Dashboard/_Card.vue";
// Service
import * as DashboardService from "@/services/dashboard-service";

// Interface
import type { IDashboard } from "@/interfaces/IDashboard";

const marcas = ref<IDashboard[]>();

onMounted(() => {
  DashboardService.listaIndicadoresMarcas().then((resposta) => {
    marcas.value = resposta.dados;
  });
});
</script>
<style scoped>
@media (min-width: 320px) and (max-width: 767px) {
  .cards {
    width: 286px!important;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .cards {
    width: 600px!important;
  }
}
@media (min-width: 1024px) {
  .cards {
    width: 912px!important;
  }
}
</style>
