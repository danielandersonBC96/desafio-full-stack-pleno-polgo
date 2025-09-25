<template>
  <section id="home" class="home-section">
    <div class="container">
      <h1>Bem-vindo à Campanha Promocional!</h1>
      <p>
        Participe e concorra a prêmios incríveis. Siga as instruções abaixo e não perca a chance de ganhar!
      </p>

      <div class="cards-container">
        <div class="card">
          <div class="icon">📝</div>
          <h2>Cadastro</h2>
          <p>Cadastre-se na plataforma usando seu e-mail válido e crie sua senha.</p>
        </div>
        <div class="card">
          <div class="icon">🛒</div>
          <h2>Comprar</h2>
          <p>Adquira produtos participantes da promoção nas lojas cadastradas.</p>
        </div>
        <div class="card">
          <div class="icon">📤</div>
          <h2>Enviar Comprovante</h2>
          <p>Envie seu comprovante de compra pelo formulário de participação.</p>
        </div>
        <div class="card">
          <div class="icon">🏆</div>
          <h2>Acompanhar Resultados</h2>
          <p>Verifique os ganhadores e prêmios na seção correspondente.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nenhum script necessário
</script>

<style scoped>
.home-section {
  padding: 4rem 2rem;
  background: linear-gradient(90deg, #3b82f6, #4f46e5);
  color: white;
  text-align: center;
}

.home-section h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.home-section p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

/* Container de cards */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

/* Card individual */
.card {
  background-color: white;
  color: #111827;
  border-radius: 1rem;
  padding: 2rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Responsividade */
@media (max-width: 1024px) {
  .cards-container {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
