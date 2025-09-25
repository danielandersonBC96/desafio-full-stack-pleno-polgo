import { ref, onMounted, nextTick } from "vue";
import Header from "./components/header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Home from "./views/home.vue";
import ComoParticipar from "./views/comoparticipar.vue";
import Premios from "./views/premios.vue";
import Faq from "./views/faq.vue";
import Ganhadores from "./views/ganhadores.vue";
import Loja from "./views/lojas.vue";
import MapGanhadores from "./components/MapGanhadores/MapGanhadores.vue";
import MapLojas from "./components/MapLojas/MapLojas.vue";
const loading = ref(true);
onMounted(async () => {
    // Loader mínimo de 0.8s para performance e UX
    setTimeout(async () => {
        loading.value = false;
        await nextTick();
        const elements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.target.classList.toggle("active", entry.isIntersecting));
        }, { threshold: 0.2 });
        elements.forEach(el => observer.observe(el));
    }, 800);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "app",
});
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "loader-overlay" },
        'aria-label': "Carregando conteúdo",
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "spinner" },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
        role: "main",
    });
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        id: "home",
    });
    /** @type {[typeof Home, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(Home, new Home({
        ...{ class: "reveal left" },
    }));
    const __VLS_5 = __VLS_4({
        ...{ class: "reveal left" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        id: "como-participar",
    });
    /** @type {[typeof ComoParticipar, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(ComoParticipar, new ComoParticipar({
        ...{ class: "reveal right" },
    }));
    const __VLS_9 = __VLS_8({
        ...{ class: "reveal right" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        id: "premios",
    });
    /** @type {[typeof Premios, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Premios, new Premios({
        ...{ class: "reveal left" },
    }));
    const __VLS_13 = __VLS_12({
        ...{ class: "reveal left" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        id: "faq",
    });
    /** @type {[typeof Faq, ]} */ ;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(Faq, new Faq({
        ...{ class: "reveal right" },
    }));
    const __VLS_17 = __VLS_16({
        ...{ class: "reveal right" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        id: "ganhadores",
    });
    /** @type {[typeof Ganhadores, ]} */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(Ganhadores, new Ganhadores({
        ...{ class: "reveal left" },
    }));
    const __VLS_21 = __VLS_20({
        ...{ class: "reveal left" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    /** @type {[typeof MapGanhadores, ]} */ ;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(MapGanhadores, new MapGanhadores({
        ...{ class: "reveal right" },
    }));
    const __VLS_25 = __VLS_24({
        ...{ class: "reveal right" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    __VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
        id: "lojas",
    });
    /** @type {[typeof Loja, ]} */ ;
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(Loja, new Loja({
        ...{ class: "reveal left" },
    }));
    const __VLS_29 = __VLS_28({
        ...{ class: "reveal left" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    /** @type {[typeof MapLojas, ]} */ ;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(MapLojas, new MapLojas({
        ...{ class: "reveal right" },
    }));
    const __VLS_33 = __VLS_32({
        ...{ class: "reveal right" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_32));
}
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
/** @type {__VLS_StyleScopedClasses['loader-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['spinner']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['reveal']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Header: Header,
        Footer: Footer,
        Home: Home,
        ComoParticipar: ComoParticipar,
        Premios: Premios,
        Faq: Faq,
        Ganhadores: Ganhadores,
        Loja: Loja,
        MapGanhadores: MapGanhadores,
        MapLojas: MapLojas,
        loading: loading,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
