<template>
<p class="text-center fs-7 fixed-bottom pt-5">Copyright © {{ anoAtual }} Caranga Bom - Todos os direitos reservados</p>
</template>

<script setup lang="ts">
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
