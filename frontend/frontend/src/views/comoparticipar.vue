<script setup>
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
</script>

<template>
  <section id="como-participar" class="como-participar">
    <h2>Como Participar</h2>
    <div class="cards-container">
      <div v-for="(passo, index) in passos" :key="index" class="card">
        <div class="icone">{{ passo.icone }}</div>
        <h3 class="titulo">{{ passo.titulo }}</h3>
        <p class="descricao">{{ passo.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Seção principal */
.como-participar {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.como-participar h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #111827;
}

/* Grid de cards */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card individual */
.card {
  background-color: #ffffff;
  padding: 30px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Ícone */
.icone {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* Título do passo */
.titulo {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #111827;
}

/* Descrição do passo */
.descricao {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

/* Responsividade */
@media (max-width: 1024px) {
  .como-participar h2 {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .como-participar {
    padding: 40px 15px;
  }
  .card {
    padding: 20px 15px;
  }
}
</style>
