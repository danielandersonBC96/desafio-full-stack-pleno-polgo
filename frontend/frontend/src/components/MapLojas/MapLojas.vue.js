import { ref, onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "./styles.css"; // importa o CSS externo
const API_URL = "http://localhost:8000"; // ajuste se necessário
const mapContainer = ref(null);
onMounted(async () => {
    if (!mapContainer.value)
        return;
    const map = L.map(mapContainer.value).setView([-14.2350, -51.9253], 4);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    try {
        const res = await axios.get(`${API_URL}/lojas/agregacao`);
        const lojas = res.data.data;
        lojas.forEach(loja => {
            if (loja.lat && loja.lng) {
                L.marker([loja.lat, loja.lng])
                    .addTo(map)
                    .bindPopup(`
            <strong>${loja.estado}</strong><br/>
            Lojas: ${loja.count}
          `);
            }
        });
    }
    catch (err) {
        console.error("Erro ao carregar lojas:", err);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ref: "mapContainer",
    ...{ class: "map-container" },
});
/** @type {typeof __VLS_ctx.mapContainer} */ ;
// @ts-ignore
[mapContainer,];
/** @type {__VLS_StyleScopedClasses['map-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        mapContainer: mapContainer,
    }),
});
export default (await import('vue')).defineComponent({});

