<template>
  <div class="container my-5">
    <form class="row g-3" @submit.prevent="salvarVeiculo">
      <div class="col-md-4">
        <label for="modelo" class="form-label">Modelo</label>
        <input
          type="text"
          class="form-control"
          id="modelo"
          name="modelo"
          v-model="modelo"
          placeholder="Ex: Camaro SS"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="ano" class="form-label">Ano</label>
        <input
          type="text"
          class="form-control"
          id="ano"
          name="ano"
          v-model="ano"
          placeholder="Ex: 2022"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="valor" class="form-label">Valor</label>
        <input
          type="text"
          class="form-control"
          id="valor"
          name="valor"
          v-model="valor"
          required
        />
      </div>
      <div class="col-md-5">
        <label for="url" class="form-label">URL</label>
        <input
          type="text"
          class="form-control"
          id="url"
          name="url"
          v-model="imagem"
          required
        />
      </div>
      <div class="col-md-5">
        <label for="montadora" class="form-label">Marca</label>
        <select class="form-select" name="montadora" v-model="marca">
          <option v-for="montadora in montadoras" :value="montadora.id">{{ montadora.nome }}</option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn btn-outline-success">Adicionar Veículo</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, onBeforeMount } from "vue";

// Service
import * as VeiculoService from "@/services/veiculos-service";
import * as MarcaService from "@/services/marca-service";

// Models
import { criarVeiculo } from "@/models/veiculos";

// Interfaces
import type { IVeiculo } from "@/interfaces/IVeiculo";
import type { IMarca } from "@/interfaces/IMarca";

const modelo = ref<string>("");
const ano = ref<number>();
const valor = ref<number>();
const imagem = ref<string>("");
const marca = ref<string>("");

const montadoras = ref<IMarca[]>([]);

// Funções
function salvarVeiculo() {
  const novoVeiculo: IVeiculo = criarVeiculo(
    modelo.value,
    ano.value as number,
    valor.value as number,
    imagem.value,
    marca.value
  );
  VeiculoService.salvarVeiculo(novoVeiculo).then(() => {
    alert(`${novoVeiculo.modelo} - Adicionado com sucesso`);
    limparFormulario()
  });
}

onBeforeMount(() => {
  MarcaService.listarMarcas().then((resposta) => {
    montadoras.value = resposta.dados;
  });
});

function limparFormulario() {
  modelo.value = '',
    ano.value = undefined
    valor.value = undefined
    imagem.value = ''
    marca.value = ''
}

</script>
