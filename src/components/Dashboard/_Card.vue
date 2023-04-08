<template>
  <div class="card text-bg-danger mb-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title mb-3 ubuntu">{{ marca!.marca }}</h5>
      <p class="card-text">Total de veículos: {{ marca!.quantidade }}</p>
      <p class="card-text">Receita total: {{ mascaraReal(marca!.montante) }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
// Utils
import { mascaraReal } from "@/utils/valoresMonetarios";

// Props
defineProps({
  marca: Object,
});
</script>
