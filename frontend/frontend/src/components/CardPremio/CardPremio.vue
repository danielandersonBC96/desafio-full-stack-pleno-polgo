<template>
  <Card :title="premio.nome" :description="premio.descricao" :image="premio.imagem"/>
</template>

<script setup>
import Card from "./Card.vue";
defineProps({
  premio: { type: Object, required: true }
});
</script>
