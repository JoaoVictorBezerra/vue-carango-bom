<template>
    <p class="text-center fs-7  pt-5">Copyright © {{ anoAtual }} Carango Bom - Todos os direitos reservados</p>
</template>

<script setup lang="ts">
// Variaveis
const data: Date = new Date()
const anoAtual: number = data.getFullYear()
</script>

<style scoped>
@media (max-width: 425px) {
    .fs-7 {
        font-size: 10px
    }
}
</style>
