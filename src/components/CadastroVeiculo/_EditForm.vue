<template>
  <div class="container">
    <form class="row g-3" @submit.prevent=" salvarEdicaoVeiculo()">
      <div class="col-md-4">
        <label for="modelo" class="form-label">Modelo</label>
        <input type="text" class="form-control" id="modelo" name="modelo" v-model="veiculo.modelo"
          placeholder="Ex: Camaro SS" required />
      </div>
      <div class="col-md-4">
        <label for="ano" class="form-label">Ano</label>
        <input type="text" class="form-control" id="ano" name="ano" v-model="veiculo.ano" placeholder="Ex: 2022"
          required />
      </div>
      <div class="col-md-4">
        <label for="valor" class="form-label">Valor</label>
        <input type="text" class="form-control" id="valor" name="valor" v-model="veiculo.valor" required />
      </div>
      <div class="col-md-5">
        <label for="url" class="form-label">URL</label>
        <input type="text" class="form-control" id="url" name="url" v-model="veiculo.imagemUrl" required />
      </div>
      <div class="col-md-5">
        <label for="montadora" class="form-label">Marca</label>
        <select class="form-select" name="montadora" v-model="veiculo.marca.id">
          <option v-for="montadora in montadoras" :value="montadora.id">{{ montadora.nome }}</option>
        </select>
      </div>
      <div>
        <button type="submit" class="btn btn-success">Editar Veículo</button>
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
// Router
import { useRoute } from "vue-router";
//Types
import type { IVeiculo } from '@/interfaces/IVeiculo';

const router = useRoute();
const veiculo = ref();
const montadoras = ref();
const veiculoId = router.params.id as string

function salvarEdicaoVeiculo() {
    const novoModelo: IVeiculo = {
      id: veiculoId,
      modelo: veiculo.value.modelo,
      ano: veiculo.value.ano,
      valor: veiculo.value.valor,
      imagemUrl: veiculo.value.imagemUrl,
      marcaId: veiculo.value.marca.id
    }
    VeiculoService.editarVeiculo(novoModelo).then(() => {
        alert("Veículo editado com sucesso!");
    });
}

onBeforeMount(() => {
  VeiculoService.listarVeiculo(veiculoId).then((resposta) => {
    veiculo.value = resposta.dados;
  });
  MarcaService.listarMarcas().then((resposta) => {
      montadoras.value = resposta.dados;
  })
});


</script>
