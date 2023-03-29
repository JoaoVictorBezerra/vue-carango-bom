<template>
  <div class="container w-75">
    <div class="table-responsive my-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Marca</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="marca in marcas">
            <td scope="row">{{ marca!.nome }}</td>
            <td>
                <button class="btn btn-danger">Excluir</button>
                <button class="btn btn-success">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
// Vue
import { ref } from 'vue'

// Service
import * as MarcaService from '@/services/marca-service'
import type { IMarca } from '@/interfaces/IMarca';

const marcas = ref<IMarca[]>([])


// Funções
MarcaService.listarMarcas().then((resposta) => {
    marcas.value = resposta.dados
})
</script>
