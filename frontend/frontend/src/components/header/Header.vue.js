import { ref } from "vue";
const menuOpen = ref(false);
function redirectToApp() {
    window.location.href = "https://app.campanha.com/login";
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['menu-desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-login']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['hamburger']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-login']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "header" },
});
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "nav-container" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "logo" },
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "menu-desktop" },
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#home",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#como-participar",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#premios",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#faq",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#ganhadores",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#lojas",
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.redirectToApp) },
    ...{ class: "btn-login" },
});
// @ts-ignore
[redirectToApp,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.menuOpen = true;
            // @ts-ignore
            [menuOpen,];
        } },
    ...{ class: "hamburger" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.menuOpen = false;
            // @ts-ignore
            [menuOpen,];
        } },
    ...{ class: "overlay" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.menuOpen) }, null, null);
// @ts-ignore
[menuOpen,];
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "slide",
    persisted: true,
}));
const __VLS_2 = __VLS_1({
    name: "slide",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "mobile-menu" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.menuOpen) }, null, null);
// @ts-ignore
[menuOpen,];
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#home",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#como-participar",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#premios",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#faq",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#ganhadores",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    href: "#lojas",
});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.redirectToApp) },
    ...{ class: "btn-login" },
});
// @ts-ignore
[redirectToApp,];
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-container']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-desktop']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-login']} */ ;
/** @type {__VLS_StyleScopedClasses['hamburger']} */ ;
/** @type {__VLS_StyleScopedClasses['overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['mobile-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-login']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        menuOpen: menuOpen,
        redirectToApp: redirectToApp,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
