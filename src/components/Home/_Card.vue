<template>
    <div class="card text-center" style="width: 18rem">
      <div style="height: 12rem" class="text-center">
        <img
          :src="props.carro!.imagemUrl"
          class="card-img-top"
          style="height: 200px; object-fit: cover"
          :alt="props.carro!.nome"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title ubuntu">
          {{ props.carro!.marca.nome + " - " + props.carro!.modelo }}
        </h5>
        <p class="card-text arima">
          {{ props.carro!.ano }}
        </p>
        <p class="card-text arima">
          {{ mascaraReal(props.carro!.valor) }}
        </p>
        <a href="#" class="btn btn-outline-danger">Comprar</a>
      </div>
    </div>
</template>
<script setup lang="ts">
// Utils
import { mascaraReal } from "@/utils/valoresMonetarios";

/// Props
const props = defineProps({
  carro: Object,
});
</script>
<style scoped>
</style>
