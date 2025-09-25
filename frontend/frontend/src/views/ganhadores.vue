<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const API_URL = "http://localhost:8000";

const ganhadores = ref([]);
const lojas = ref([]);

onMounted(async () => {
  try {
    // Buscar ganhadores
    const resGanhadores = await axios.get(`${API_URL}/ganhadores`);
    ganhadores.value = resGanhadores.data.data; // array dentro de data

    // Agregação por estado
    const resLojas = await axios.get(`${API_URL}/lojas/agregacao`);
    lojas.value = resLojas.data.data; // array dentro de data

    console.log("Ganhadores:", ganhadores.value);
    console.log("Lojas agregadas:", lojas.value);
  } catch (err) {
    console.error("Erro ao carregar dados:", err);
  }
});
</script>

<template>
  <section id="ganhadores" class="section">
    <h2 class="section-title">Ganhadores</h2>

    <!-- Totais por Estado -->
    <div class="grid estados-grid">
      <div v-for="(total, uf) in totaisPorEstado" :key="uf" class="card estado-card">
        <h3 class="estado-nome">{{ uf.toUpperCase() }}</h3>
        <p class="estado-total">{{ total }}</p>
        <span class="estado-label">ganhadores</span>
      </div>
    </div>

    <!-- Ganhadores -->
    <div class="grid ganhadores-grid">
      <div v-for="g in ganhadores" :key="g.nome + g.data" class="card ganhador-card">
        <h3 class="ganhador-nome">{{ g.nome }}</h3>
        <p><strong>Estado:</strong> {{ g.estado }}</p>
        <p><strong>Cidade:</strong> {{ g.cidade }}</p>
        <p><strong>Prêmio:</strong> {{ g.premio }}</p>
        <p class="data">{{ new Date(g.data).toLocaleDateString() }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
   padding: 2rem;
  /* Degradê de azul para roxo */
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: black; /* Ajusta a cor do texto para ficar visível no degradê */
  margin-bottom:160px
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: white;
}

/* Grid Estados */
.estados-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
}

.estado-card {
  background-color: #3b82f6;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.estado-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.estado-nome {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.estado-total {
  font-size: 2rem;
  font-weight: bold;
}

.estado-label {
  font-size: 0.8rem;
  display: block;
  margin-top: 0.2rem;
}

/* Grid Ganhadores */
.ganhadores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.ganhador-card {
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ganhador-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.ganhador-nome {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.data {
  color: #888;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>
