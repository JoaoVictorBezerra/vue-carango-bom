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
            <td scope="row">{{ veiculo.nome }}</td>
            <td scope="row">{{ veiculo.modelo }}</td>
            <td scope="row">{{ veiculo.ano }}</td>
            <td scope="row">
              {{
              new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              }).format(veiculo.valor)
              }}
            </td>
            <td>
              <div class="d-flex gap-2">
                <button @click.prevent="_deletarVeiculo(veiculo.id)" class="btn btn-danger">Excluir</button>
                <button class="btn btn-success">Editar</button>
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

const veiculos = ref<any>([]);

function _deletarVeiculo(veiculoId: string) {
  VeiculoService.deletarVeiculo(veiculoId)
    .then(() => {
        alert('Veículo deletado com sucesso !!')
      }
    )
}


VeiculoService.listarVeiculos().then((resposta) => {
  // console.log(resposta);
  veiculos.value = resposta.dados;
});

// Funções
</script>
