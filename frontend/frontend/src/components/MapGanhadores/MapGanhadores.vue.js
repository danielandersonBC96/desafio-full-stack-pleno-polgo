import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./styles.css"; // Importa CSS externo
const API_URL = "http://localhost:8000"; // ajuste se necessário
onMounted(async () => {
    // Inicializa o mapa no Brasil
    const map = L.map("map").setView([-14.2350, -51.9253], 4);
    // Camada base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    try {
        // Busca dados da API
        const res = await axios.get(`${API_URL}/ganhadores/agregacao`);
        const ganhadores = res.data.data;
        // Adiciona marcadores
        ganhadores.forEach(g => {
            if (g.lat && g.lng) {
                L.marker([g.lat, g.lng])
                    .addTo(map)
                    .bindPopup(`
            <strong>${g.estado}</strong><br/>
            Ganhadores: ${g.count}
          `);
            }
        });
    }
    catch (err) {
        console.error("Erro ao carregar ganhadores:", err);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "map",
    ...{ class: "map-container" },
});
/** @type {__VLS_StyleScopedClasses['map-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({}),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
