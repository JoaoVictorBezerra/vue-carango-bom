<template>
  <div class="table-responsive my-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Marca</th>
          <th scope="col">Total de veículos</th>
          <th scope="col">Valor total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="montadora in arrayDashboard">
          <th scope="row">{{montadora.marca}}</th>
          <td>{{ montadora.quantidade }} carros</td>
          <td>{{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(montadora.montante) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
// Vue
import { ref, onMounted } from "vue";

// Interface
import type { IDashboard } from "@/interfaces/IDashboard";

// Service
import * as DashboardService from "@/services/dashboard-service";

const arrayDashboard = ref<IDashboard[]>([]);

onMounted(() => {
  DashboardService.listaIndicadoresMarcas().then((data: any) => {
    arrayDashboard.value = data.dados;
  });
});
</script>
