import Card from "./Card.vue";
const __VLS_props = defineProps({
    premio: { type: Object, required: true }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {[typeof Card, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({
    title: (__VLS_ctx.premio.nome),
    description: (__VLS_ctx.premio.descricao),
    image: (__VLS_ctx.premio.imagem),
}));
const __VLS_1 = __VLS_0({
    title: (__VLS_ctx.premio.nome),
    description: (__VLS_ctx.premio.descricao),
    image: (__VLS_ctx.premio.imagem),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
// @ts-ignore
[premio, premio, premio,];
var __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ...__VLS_props,
        ...{},
        Card: Card,
    }),
});
export default (await import('vue')).defineComponent({
    setup: () => ({
        ...__VLS_props,
        ...{},
    }),
});
; /* PartiallyEnd: #4569/main.vue */
