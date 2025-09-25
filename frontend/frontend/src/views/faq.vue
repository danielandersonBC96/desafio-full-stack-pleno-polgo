<script setup>
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
</script>

<template>
  <section id="faq" class="faq-section">
    <h2>Perguntas Frequentes</h2>

    <div class="faq-container">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-card">
        <button class="faq-question" @click="toggleFaq(index)">
          <span>{{ faq.pergunta }}</span>
          <span class="icon">{{ faq.aberto ? "▲" : "▼" }}</span>
        </button>
        <div v-if="faq.aberto" class="faq-answer">
          {{ faq.resposta }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Seção FAQ */
.faq-section {
  padding: 60px 20px;
  background-color: white;
  text-align: center;
  border-radius: 15px;
  margin-top: 30px;
}

.faq-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: black;
}

/* Container dos cards */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Card individual */
.faq-card {
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}

.faq-card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* Pergunta */
.faq-question {
  width: 100%;
  background-color: black;
  border: none;
  padding: 20px 25px;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: white;
}

.faq-question:hover {
  background-color: #222;
}

/* Ícone da seta */
.icon {
  font-size: 1rem;
  color: white;
}

/* Resposta */
.faq-answer {
  padding: 20px 25px;
  font-size: 1rem;
  color: #111;
  background-color: #ffffff;
  transition: all 0.3s ease;
  line-height: 1.6;
}

/* Responsividade */
@media (max-width: 640px) {
  .faq-section {
    padding: 40px 15px;
  }
  .faq-question, .faq-answer {
    padding: 15px 20px;
  }
}
</style>
