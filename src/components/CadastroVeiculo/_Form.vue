<template>
    <div class="container">
      <form class="row g-3" @submit.prevent="salvarVeiculo">
        <div class="col-md-4">
          <label for="modelo" class="form-label">Modelo</label>
          <input type="text" class="form-control" id="modelo" name="modelo" v-model="modelo" placeholder="Ex: Camaro SS" required>
        </div>
        <div class="col-md-4">
          <label for="ano" class="form-label">Ano</label>
          <input type="text" class="form-control" id="ano" name="ano" v-model="ano" placeholder="Ex: 2022" required>
        </div>
        <div class="col-md-4">
          <label for="valor" class="form-label">Valor</label>
          <input type="text" class="form-control" id="valor" name="valor" v-model="valor" required>
        </div>
        <div class="col-md-5">
          <label for="url" class="form-label">URL</label>
          <input type="text" class="form-control" id="url" name="url" v-model="imagem" required>
        </div>
        <!-- <div class="col-md-5">
          <label for="marca" class="form-label">Marca</label>
          <select class="form-select" name="marca" v-model="marca">
            <option value="1">GM</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div> -->
        <div>
          <button type="submit" class="btn btn-success">Adicionar Veículo</button>
        </div>
      </form>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue'

  const modelo = ref<string>('')
  const ano = ref<number>()
  const valor = ref<number>()
  const imagem = ref<string>()
  const marca = ref<string>()

  function salvarVeiculo() {
    console.log('modelo:: ', modelo.value)
    console.log('ano:: ', ano.value)
    console.log('valor:: ', valor.value)
    console.log('imagem:: ', imagem.value)
  }
</script>