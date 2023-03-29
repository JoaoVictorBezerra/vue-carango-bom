<template>
  <div class="container w-75">
    <div class="table-responsive my-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Ano</th>
            <th scope="col">Valor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="veiculo in veiculos">
            <td scope="row">{{ veiculo.marca.nome }}</td>
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
import { ref } from "vue";

// Service
import * as VeiculoService from "@/services/veiculos-service";
// Interface
import type { IVeiculo } from "@/interfaces/IVeiculo";

const veiculos = ref<any>([]);

VeiculoService.listarVeiculos().then((resposta) => {
  console.log(resposta);
  veiculos.value = resposta.dados;
});

// Funções
</script>
