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
        {{ converetReal(props.carro!.valor) }}
      </p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</template>
<script setup lang="ts">
//utils
import { converetReal } from '@/utils/converetReal'

const props = defineProps({
    carro: Object
})
</script>
