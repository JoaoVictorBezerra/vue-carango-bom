<template>
    <RouterLink :to="props.rota as string" class="btn btn-outline-danger">{{ props.titulo}}</RouterLink>
</template>
<script setup lang="ts">
const props = defineProps({
    rota: String,
    titulo: String
})
</script>