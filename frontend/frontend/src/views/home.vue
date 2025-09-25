<template>
  <section id="home" class="home-section">
    
    <!-- Conteúdo principal -->
    <div class="home-content">
      <h1 class="home-title">Participe da Promoção Incrível!</h1>
      <p class="home-subtitle">
        Concorra a prêmios incríveis nas lojas participantes. É rápido, fácil e divertido!
      </p>
      <a href="#comoparticipar" class="home-button">Saiba Como Participar</a>
    </div>

    <!-- Setinha animada -->
    <div class="scroll-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>

  </section>
</template>

<style scoped>
/* Seção principal */
.home-section {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #7f00ff, #4b0082); /* gradient purple -> indigo */
  color: white;
  padding: 0 20px;
  overflow: hidden;
}

/* Conteúdo principal */
.home-content {
  z-index: 10;
  max-width: 800px;
  animation: fadeIn 1s ease forwards;
}

.home-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.home-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.3s;
}

/* Botão principal */
.home-button {
  display: inline-block;
  background-color: #ffea00;
  color: #1a1a1a;
  font-weight: bold;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease, background-color 0.3s ease;
  animation: bounce 2s infinite;
}

.home-button:hover {
  background-color: #ffd700;
  transform: scale(1.05);
}

/* Setinha animada */
.scroll-arrow {
  position: absolute;
  bottom: 30px;
  animation: bounce 2s infinite;
}

.arrow-svg {
  width: 40px;
  height: 40px;
  stroke: white;
}

/* Animações */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-8px); }
}

/* Responsividade */
@media (max-width: 768px) {
  .home-title {
    font-size: 2.5rem;
  }
  .home-subtitle {
    font-size: 1.2rem;
  }
  .home-button {
    padding: 12px 30px;
  }
  .arrow-svg {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  .home-title {
    font-size: 2rem;
  }
  .home-subtitle {
    font-size: 1rem;
  }
  .home-button {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
}
</style>
