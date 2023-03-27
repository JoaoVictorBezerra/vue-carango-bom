<template>
  <div class="container">
    <form class="row g-3 d-flex flex-column align-items-center">
        <div class="col-md-4">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email" required>
        </div>
        <div class="col-md-4">
            <label for="senha">Senha</label>
            <input type="text" class="form-control" id="senha" v-model="senha" required>
        </div>
        <div class="col-md-1">
            <button type="submit" class="btn btn-success">Entrar</button>
        </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string>('')
const senha = ref<string>('')

</script>
