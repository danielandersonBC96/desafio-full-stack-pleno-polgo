<template>
  <div id="app">
    <!-- Header fixo -->
    <Header />

    <!-- Loader -->
    <div v-if="loading" class="loader-overlay" aria-label="Carregando conteúdo">
      <div class="spinner"></div>
    </div>

    <!-- Conteúdo principal -->
    <main v-else role="main">
      <section id="home">
        <Home class="reveal left" />
      </section>
      <section id="como-participar">
        <ComoParticipar class="reveal right" />
      </section>
      <section id="premios">
        <Premios class="reveal left" />
      </section>
      <section id="faq">
        <Faq class="reveal right" />
      </section>
      <section id="ganhadores">
        <Ganhadores class="reveal left" />
        <MapGanhadores class="reveal right"/>
      </section>
      <section id="lojas">
        <Loja class="reveal left" />
        <MapLojas class="reveal right"/>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => entry.target.classList.toggle("active", entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
  }, 800);
});
</script>

<style>
/* Loader */
.loader-overlay {
  position: fixed;
  inset: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 5px solid #e5e7eb;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Reset e tipografia */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; color: #111827; background-color: #ffffff; line-height: 1.6; }
html { scroll-behavior: smooth; }

/* Layout principal */
#app { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; width: 100%; }

/* Header */
header {
  position: fixed;
  top: 0; left: 0; width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 1000; transition: all 0.3s ease;
}
header .logo {
  font-weight: 700; font-size: 1.5rem;
  color: #111827; background-color: transparent;
  border-radius: 30px; padding: 0.5rem 1rem;
  display: inline-block;
}

/* Menu */
nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; }
nav .menu-desktop { display: flex; align-items: center; gap: 3rem; }
nav .menu-desktop a { font-weight: 500; color: #111827; transition: color 0.3s ease; }
nav .menu-desktop a:hover { color: #2563eb; }
nav .login-btn {
  background-color: #2563eb; color: white;
  padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600;
  transition: background-color 0.3s ease;
}
nav .login-btn:hover { background-color: #1e40af; }

/* Sections */
main > section {
  padding: 8rem 2rem; 
  max-width: 1200px;
  margin: 0 auto 6rem;
}

/* Animações */
.reveal { opacity: 0; transform: translateX(50px); transition: transform 0.6s ease-out, opacity 0.6s ease-out; }
.reveal.left { transform: translateX(-50px); }
.reveal.active { opacity: 1; transform: translateX(0); }

/* Footer */
footer {
  width: 100%; background-color: #111827; color: #f9f9f9;
  text-align: center; padding: 2rem 1rem;
}
footer a { color: #f9f9f9; margin: 0 0.5rem; transition: color 0.3s ease; }
footer a:hover { color: #2563eb; }

/* Responsividade */
@media (max-width: 1024px) {
  main > section { padding: 6rem 1.5rem; margin-bottom: 5rem; }
}
@media (max-width: 640px) {
  main > section { padding: 5rem 1rem; margin-bottom: 4rem; }
}
</style>
