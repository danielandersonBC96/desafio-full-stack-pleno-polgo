<template>
  <Card
    :title="ganhador.nome"
    :description="ganhador.estado + ' - ' + ganhador.data"
  />
</template>

<script setup>
import Card from "./Card.vue";
defineProps({
  ganhador: { type: Object, required: true }
});
</script>
