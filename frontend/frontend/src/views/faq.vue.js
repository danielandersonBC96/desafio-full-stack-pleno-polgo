import { ref } from "vue";
// Lista de perguntas e respostas
const faqs = ref([
    {
        pergunta: "Como faço para participar da promoção?",
        resposta: "Cadastre-se na plataforma, compre produtos participantes e envie o comprovante de compra.",
        aberto: false
    },
    {
        pergunta: "Posso participar de qualquer cidade?",
        resposta: "Sim, a promoção é válida em todas as cidades com lojas participantes.",
        aberto: false
    },
    {
        pergunta: "Quais produtos são válidos para a promoção?",
        resposta: "Todos os produtos com selo promocional estão incluídos na campanha.",
        aberto: false
    },
    {
        pergunta: "Quando serão divulgados os ganhadores?",
        resposta: "Os ganhadores serão divulgados semanalmente no site oficial.",
        aberto: false
    }
]);
// Função para alternar abertura da resposta
function toggleFaq(index) {
    faqs.value[index].aberto = !faqs.value[index].aberto;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['faq-section']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-card']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-question']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-section']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-question']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-answer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    id: "faq",
    ...{ class: "faq-section" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "faq-container" },
});
for (const [faq, index] of __VLS_getVForSourceType((__VLS_ctx.faqs))) {
    // @ts-ignore
    [faqs,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (index),
        ...{ class: "faq-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleFaq(index);
                // @ts-ignore
                [toggleFaq,];
            } },
        ...{ class: "faq-question" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    (faq.pergunta);
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "icon" },
    });
    (faq.aberto ? "▲" : "▼");
    if (faq.aberto) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "faq-answer" },
        });
        (faq.resposta);
    }
}
/** @type {__VLS_StyleScopedClasses['faq-section']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-container']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-card']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-question']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['faq-answer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        faqs: faqs,
        toggleFaq: toggleFaq,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
