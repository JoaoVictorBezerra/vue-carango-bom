<template>
  <div class="container mt-3">
    <form class="row g-3 align-items-center flex-column" @submit.prevent="salvarMarca">
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
      <button type="submit" class="btn btn-success w-25">Adicionar Veículo</button>
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
