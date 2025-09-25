<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const API_URL = "http://localhost:8000";

const lojas = ref([]);

onMounted(async () => {
  try {
    // Buscar apenas as lojas
    const res = await axios.get(`${API_URL}/lojas`);
    lojas.value = res.data.data; // vem dentro de "data"

    console.log("Lojas:", lojas.value);
  } catch (err) {
    console.error("Erro ao carregar lojas:", err);
  }
});
</script>

<template>
  <section id="lojas" class="section">
    <h2 class="section-title">Lojas Participantes</h2>

    <div class="grid lojas-grid">
      <div v-for="loja in lojas" :key="loja.id || loja._id" class="card loja-card">
        <h3 class="loja-nome">{{ loja.nome }}</h3>
        <p><strong>Cidade:</strong> {{ loja.cidade }}</p>
        <p><strong>Estado:</strong> {{ loja.estado }}</p>
        <p v-if="loja.endereco"><strong>Endereço:</strong> {{ loja.endereco }}</p>
        <p v-if="loja.cnpj"><strong>CNPJ:</strong> {{ loja.cnpj }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: black;
   margin-bottom:160px
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: white;
}

.lojas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.loja-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: black;
}

.loja-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.loja-nome {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
