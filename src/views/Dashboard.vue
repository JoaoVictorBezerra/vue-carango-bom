<template>
    <div class="container text-center">
        <h2>Bem vindo ao dashboard</h2>
        <Table />
    </div>
</template>
<script setup lang="ts">
import Table from '@/components/Dashboard/_Table.vue';
import { listaIndicadoresMarcas } from '@/services/dashboard-service'
import { onMounted } from 'vue'

onMounted(() => {
    listaIndicadoresMarcas()
        .then((data: any) => {
            console.log('Dados recebidos:', data.dados);
        })
})
</script>
