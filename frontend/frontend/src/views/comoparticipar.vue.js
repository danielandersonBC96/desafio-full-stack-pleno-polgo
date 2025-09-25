import { ref } from "vue";
const passos = ref([
    {
        titulo: "Passo 1: Cadastro",
        descricao: "Cadastre-se na plataforma usando seu e-mail válido e crie sua senha.",
        icone: "📝"
    },
    {
        titulo: "Passo 2: Comprar",
        descricao: "Adquira produtos participantes da promoção nas lojas cadastradas.",
        icone: "🛒"
    },
    {
        titulo: "Passo 3: Enviar Comprovante",
        descricao: "Envie seu comprovante de compra pelo formulário de participação.",
        icone: "📤"
    },
    {
        titulo: "Passo 4: Acompanhar Resultados",
        descricao: "Verifique os ganhadores e prêmios na seção correspondente.",
        icone: "🏆"
    }
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['como-participar']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['como-participar']} */ ;
/** @type {__VLS_StyleScopedClasses['como-participar']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    id: "como-participar",
    ...{ class: "como-participar" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "cards-container" },
});
for (const [passo, index] of __VLS_getVForSourceType((__VLS_ctx.passos))) {
    // @ts-ignore
    [passos,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (index),
        ...{ class: "card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "icone" },
    });
    (passo.icone);
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "titulo" },
    });
    (passo.titulo);
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "descricao" },
    });
    (passo.descricao);
}
/** @type {__VLS_StyleScopedClasses['como-participar']} */ ;
/** @type {__VLS_StyleScopedClasses['cards-container']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['icone']} */ ;
/** @type {__VLS_StyleScopedClasses['titulo']} */ ;
/** @type {__VLS_StyleScopedClasses['descricao']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        passos: passos,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
