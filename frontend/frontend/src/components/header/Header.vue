<template>
  <header class="header">
    <nav class="nav-container">
      <!-- Logo à esquerda -->
      <div class="logo">Campanha</div>

      <!-- Menu Desktop -->
      <ul class="menu-desktop">
        <li><a href="#home">Home</a></li>
        <li><a href="#como-participar">Como Participar</a></li>
        <li><a href="#premios">Prêmios</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#ganhadores">Ganhadores</a></li>
        <li><a href="#lojas">Lojas</a></li>
      </ul>

      <!-- Botão à direita -->
      <button @click="redirectToApp" class="btn-login">Cadastro/Login</button>

      <!-- Hamburger Mobile -->
      <button class="hamburger" @click="menuOpen = true">
        <span>&#9776;</span>
      </button>
    </nav>

    <!-- Overlay escuro -->
    <div v-show="menuOpen" class="overlay" @click="menuOpen = false"></div>

    <!-- Menu mobile lateral -->
    <transition name="slide">
      <div v-show="menuOpen" class="mobile-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#como-participar">Como Participar</a></li>
          <li><a href="#premios">Prêmios</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#ganhadores">Ganhadores</a></li>
          <li><a href="#lojas">Lojas</a></li>
          <li><button @click="redirectToApp" class="btn-login">Cadastro/Login</button></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

function redirectToApp() {
  window.location.href = "https://app.campanha.com/login";
}
</script>

<style scoped>
.header {
  position: fixed; top: 0; left: 0; width: 100%;
  background-color: white; color: black;
  z-index: 1000; padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo { font-weight: 700; font-size: 1.8rem; }

.menu-desktop {
  display: flex;
  gap: 3rem;
  list-style: none;
  flex: 1;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.menu-desktop a { color: black; text-decoration: none; font-weight: 500; transition: 0.3s; }
.menu-desktop a:hover { color: #2563eb; }

.btn-login {
  background-color: #2563eb; color: #fff;
  padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600;
  margin-left: 2rem; transition: 0.3s;
}
.btn-login:hover { background-color: #1e40af; }

.hamburger { display: none; font-size: 1.8rem; background: none; border: none; color: black; cursor: pointer; z-index: 1600; }

.overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1400;
}

.mobile-menu {
  position: fixed; top: 0; right: 0; width: 250px; height: 100%;
  background-color: #111827; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;
  z-index: 1500; transform: translateX(100%);
}
.mobile-menu ul { display: flex; flex-direction: column; gap: 1.5rem; list-style: none; }
.mobile-menu a { color: #fff; text-decoration: none; font-size: 1.2rem; }

.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); }
.slide-enter-to, .slide-leave-from { transform: translateX(0); }

@media (max-width: 640px) {
  .menu-desktop { display: none; }
  .hamburger { display: block; }
  .btn-login { display: none; }
}
</style>
