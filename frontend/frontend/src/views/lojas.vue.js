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
/** @type {__VLS_StyleScopedClasses['loja-card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    id: "lojas",
    ...{ class: "section" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "section-title" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "grid lojas-grid" },
});
for (const [loja] of __VLS_getVForSourceType((__VLS_ctx.lojas))) {
    // @ts-ignore
    [lojas,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (loja.id || loja._id),
        ...{ class: "card loja-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "loja-nome" },
    });
    (loja.nome);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (loja.cidade);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (loja.estado);
    if (loja.endereco) {
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
        (loja.endereco);
    }
    if (loja.cnpj) {
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
        (loja.cnpj);
    }
}
/** @type {__VLS_StyleScopedClasses['section']} */ ;
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['lojas-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['loja-card']} */ ;
/** @type {__VLS_StyleScopedClasses['loja-nome']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        lojas: lojas,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
