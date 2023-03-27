<template>
  <div class="container">
    <form class="row g-3 d-flex flex-column align-items-center" @submit.prevent="efetuaLogin">
      <div class="col-md-4">
        <label for="email" class="form-label">E-mail</label>
        <input type="text" class="form-control" id="email" name="email" v-model="email" placeholder="Digite seu email..." required>
      </div>
      <div class="col-md-4">
        <label for="senha" class="form-label">Senha</label>
        <input type="password" class="form-control" id="senha" name="senha" v-model="senha" required>
      </div>
      <div class="col-md-1">
        <button type="submit" class="btn btn-success">Entrar</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUsuarioStore } from '@/store/usuario-store.js';
import * as autenticacaoService from '@/services/autenticacao-service.js';

const usuarioStore = useUsuarioStore();
const usuarioAutenticado = computed(() => usuarioStore.usuario.nome === '' ? 'Ainda não autenticou' : usuarioStore.usuario.nome);

const email = ref('');
const senha = ref('');

function efetuaLogin() {
	autenticacaoService.autentica(email.value, senha.value, usuarioStore)
		.catch(alert);
}

</script>
