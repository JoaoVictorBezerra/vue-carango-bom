<template>
  <div class="container w-75">
    <div class="table-responsive my-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="w-25">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Ano</th>
            <th scope="col" class="w-25">Valor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="veiculo in veiculos">
            <td scope="row">{{ veiculo.marca?.nome }}</td>
            <td scope="row">{{ veiculo.modelo }}</td>
            <td scope="row">{{ veiculo.ano }}</td>
            <td scope="row">
              {{ converetReal(veiculo.valor) }}
            </td>
            <td>
              <div class="d-flex gap-2">
                <button @click.prevent="_deletarVeiculo(veiculo.id)" class="btn btn-danger">
                  Excluir
                </button>
                <RouterLink :to="'editar/'+veiculo.id" class="btn btn-success">
                  Editar
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
// Vue
import { ref } from "vue";

// Service
import * as VeiculoService from "@/services/veiculos-service";
import type { IVeiculo } from '@/interfaces/IVeiculo'
import { converetReal } from '@/utils/converetReal'
const veiculos = ref<any>([]);

function _deletarVeiculo(veiculoId: string) {
  const deletar = confirm("Deseja mesmo deletar esse veículo?");
  if (deletar) {
    VeiculoService.deletarVeiculo(veiculoId).then(() => {
      alert("Veículo deletado com sucesso!");
    });
  }
}

function _editarVeiculo(veiculo: IVeiculo): void {
  const novoModelo = prompt("Insira o novo modelo desse veículo");
  if (novoModelo) {
    veiculo.modelo = novoModelo;

    // console.log(veiculo);
    VeiculoService.editarVeiculo(veiculo).then(() => {
      alert("Veículo editada com sucesso!");
    });
  }
}

VeiculoService.listarVeiculos().then((resposta) => {
  veiculos.value = resposta.dados;
});

// Funções
</script>
