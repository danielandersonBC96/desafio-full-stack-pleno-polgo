<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./styles.css";

// URL da API
const API_URL = "http://localhost:8000";

const mapContainer = ref(null);

onMounted(async () => {
  if (!mapContainer.value) return;

  // Inicializa o mapa
  const map = L.map(mapContainer.value).setView([-14.2350, -51.9253], 4);

  // Tiles do OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  try {
    const res = await axios.get(`${API_URL}/lojas/agregacao`);
    console.log("Dados retornados do backend:", res.data); // debug

    // Ajusta conforme estrutura da API
    const lojas = res.data.data || res.data;

    lojas.forEach(loja => {
      if (loja.lat && loja.lng) {
        L.marker([loja.lat, loja.lng])
          .addTo(map)
          .bindPopup(`
            <strong>${loja.estado}</strong><br/>
            Lojas: ${loja.count || 0}
          `);
      }
    });
  } catch (err) {
    console.error("Erro ao carregar lojas:", err);
  }
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 500px; /* altura mínima para o mapa aparecer */
}
</style>
