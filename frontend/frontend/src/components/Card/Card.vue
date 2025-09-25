<template>
  <div class="card">
    <img v-if="image" :src="image" alt="Imagem do card" class="card-image"/>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" }
});
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #111827;
}

.card-description {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.5;
}
</style>
<template>
  <div class="card">
    <img v-if="image" :src="image" alt="Imagem do card" class="card-image"/>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" }
});
</script>

<style src="./Card.css"></style>
