<template>
  <div class="container mt-3">
    <form class="row g-3" @submit.prevent="salvarMarca">
      <div class="col-md-4">
        <label for="montadora" class="form-label">Nome da marca:</label>
        <input
          type="text"
          class="form-control"
          id="montadora"
          name="montadora"
          v-model="marca"
          placeholder="Ex: Chevrolet"
          required
        />
      </div>
      <div>
        <button type="submit" class="btn btn-success">Adicionar Veículo</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref } from "vue";

// Service
import * as MarcaService from "@/services/marca-service";

const marca = ref<string>("");

// Funções
function salvarMarca() {
  MarcaService.salvarMarca(marca.value).then(() => {
    marca.value = ''
  })
}
</script>
