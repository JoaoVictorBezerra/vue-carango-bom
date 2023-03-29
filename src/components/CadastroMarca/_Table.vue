<template>
  <div class="container w-75">
    <div class="table-responsive my-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Marca</th>
            <th scope="col" class="w-25">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="marca in marcas">
            <td scope="row">{{ marca!.nome }}</td>
            <td>
              <div class="d-flex gap-2">
                <button class="btn btn-danger" @click.prevent="deletarMarca(marca.id as string)">Excluir</button>
                <button class="btn btn-success" @click.prevent="editarMarca(marca)">Editar</button>
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
import { ref } from 'vue'

// Service
import * as MarcaService from '@/services/marca-service'
import type { IMarca } from '@/interfaces/IMarca';

const marcas = ref<any>([])

// Funções
MarcaService.listarMarcas().then((resposta) => {
    marcas.value = resposta.dados
})

function deletarMarca(marcaId: string) : void {
  const deletar = confirm("Tem certeza que deseja deletar essa marca?")
  if(deletar){
    MarcaService.deletarMarca(marcaId).then(() => {
      alert('Marca deletada com sucesso!')
    })
  }
}

function editarMarca(marca: IMarca) : void {
  const editar = prompt("Insira o novo nome dessa categoria")
  if(editar){
    marca.nome = editar;
    MarcaService.editarMarca(marca).then(() => {
      alert('Marca editada com sucesso!')
    })
  }
} 
</script>
