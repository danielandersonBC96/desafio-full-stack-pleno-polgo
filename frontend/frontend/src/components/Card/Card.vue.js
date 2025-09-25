const __VLS_props = defineProps({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card" },
});
if (__VLS_ctx.image) {
    // @ts-ignore
    [image,];
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (__VLS_ctx.image),
        alt: "Imagem do card",
        ...{ class: "card-image" },
    });
    // @ts-ignore
    [image,];
}
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ class: "card-title" },
});
(__VLS_ctx.title);
// @ts-ignore
[title,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "card-description" },
});
(__VLS_ctx.description);
// @ts-ignore
[description,];
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-image']} */ ;
/** @type {__VLS_StyleScopedClasses['card-title']} */ ;
/** @type {__VLS_StyleScopedClasses['card-description']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ...__VLS_props,
        ...{},
    }),
});
export default (await import('vue')).defineComponent({
    setup: () => ({
        ...__VLS_props,
        ...{},
    }),
});
; /* PartiallyEnd: #4569/main.vue */
