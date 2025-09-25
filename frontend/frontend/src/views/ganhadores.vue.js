import { ref, onMounted } from "vue";
import axios from "axios";
const ganhadores = ref([]);
const totaisPorEstado = ref({});
const API_URL = "http://localhost:8000";
onMounted(async () => {
    // Buscar ganhadores
    const res = await axios.get(`${API_URL}/ganhadores`);
    ganhadores.value = res.data.data; // array dentro de data
    // Agregação por estado
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['estado-card']} */ ;
/** @type {__VLS_StyleScopedClasses['ganhador-card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    id: "ganhadores",
    ...{ class: "section" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "section-title" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid estados-grid" },
});
for (const [total, uf] of __VLS_getVForSourceType((__VLS_ctx.totaisPorEstado))) {
    // @ts-ignore
    [totaisPorEstado,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (uf),
        ...{ class: "card estado-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "estado-nome" },
    });
    (uf.toUpperCase());
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "estado-total" },
    });
    (total);
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "estado-label" },
    });
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid ganhadores-grid" },
});
for (const [g] of __VLS_getVForSourceType((__VLS_ctx.ganhadores))) {
    // @ts-ignore
    [ganhadores,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (g.nome + g.data),
        ...{ class: "card ganhador-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "ganhador-nome" },
    });
    (g.nome);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (g.estado);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (g.cidade);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (g.premio);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "data" },
    });
    (new Date(g.data).toLocaleDateString());
}
/** @type {__VLS_StyleScopedClasses['section']} */ ;
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['estados-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['estado-card']} */ ;
/** @type {__VLS_StyleScopedClasses['estado-nome']} */ ;
/** @type {__VLS_StyleScopedClasses['estado-total']} */ ;
/** @type {__VLS_StyleScopedClasses['estado-label']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['ganhadores-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['ganhador-card']} */ ;
/** @type {__VLS_StyleScopedClasses['ganhador-nome']} */ ;
/** @type {__VLS_StyleScopedClasses['data']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ganhadores: ganhadores,
        totaisPorEstado: totaisPorEstado,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
