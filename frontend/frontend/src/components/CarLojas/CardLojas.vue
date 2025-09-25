<template>
  <Card
    :title="loja.nome"
    :description="loja.cidade + ', ' + loja.estado"
    :image="loja.imagem"
  />
</template>

<script setup>
import Card from "./Card.vue";
defineProps({
  loja: { type: Object, required: true }
});
</script>
