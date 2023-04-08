<template>
  <div class="container d-flex justify-content-center text-center">
    <div class="d-flex flex-wrap gap-4">
      <Card v-for="marca in marcas" :marca="marca" />
    </div>
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
<style scoped></style>
