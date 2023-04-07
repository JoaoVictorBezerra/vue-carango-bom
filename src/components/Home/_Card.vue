<template>
  <div class="card text-center" style="width: 18rem">
    <div style="height: 12rem" class="text-center">
      <img :src="props.carro!.imagemUrl" class="card-img-top" :alt="props.carro!.nome" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ props.carro!.marca.nome + ' - ' + props.carro!.modelo }}</h5>
      <p class="card-text">
        {{ props.carro!.ano }}
      </p>
      <p class="card-text">
        {{ mascaraReal(props.carro!.valor) }}
      </p>
      <a href="#" class="btn btn-outline-danger">Comprar</a>
    </div>
  </div>
</template>
<script setup lang="ts">
// Utils
import { mascaraReal } from '@/utils/valoresMonetarios'

// Props
const props = defineProps({
    carro: Object
})

</script>
<style scoped>
  .card {
    width: 100%;
    height: 100%;
  }
</style>