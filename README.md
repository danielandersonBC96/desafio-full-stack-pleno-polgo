# 🏪 Campanha de Lojas Participantes

![Docker](https://img.shields.io/badge/Docker-✔️-blue)  
![Vue](https://img.shields.io/badge/Vue.js-3-green)  
![Express](https://img.shields.io/badge/Express.js-⚡-black)  
![MongoDB](https://img.shields.io/badge/MongoDB-💾-green)  

> Um desafio fullstack com **Vue.js (frontend)** + **Node.js/Express (backend)** + **MongoDB (banco de dados)** rodando com **Docker**.  
O objetivo é listar **lojas participantes** de uma campanha promocional e permitir CRUD de lojas com agregação por estado.

---

## ✨ Funcionalidades
- ✅ Cadastro de lojas (com nome, cidade, estado, endereço e CNPJ)
- ✅ Listagem de todas as lojas
- ✅ Agregação de lojas por estado (mapa de calor ou cards)
- ✅ Consumo de API no frontend via Axios
- ✅ Documentação automática da API com Swagger

---

## 📂 Estrutura do Projeto
```bash
📦 desafio-campanha
 ┣ 📂 backend   # API em Node.js + Express
 ┣ 📂 frontend  # SPA em Vue.js (Vite)
 ┣ 📜 docker-compose.yml
 ┣ 📜 README.md
```

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/desafio-campanha.git
cd desafio-campanha
```

### 2. Subir com Docker
```bash
docker-compose up --build
```

Isso vai subir:  
- `backend` na porta **8000**  
- `frontend` na porta **5173**  
- `MongoDB` na porta **27017**

---

## 🌐 Rotas da API
Base URL: `http://localhost:8000`

| Método | Endpoint              | Descrição                         |
|--------|-----------------------|-----------------------------------|
| GET    | `/lojas`              | Lista todas as lojas              |
| POST   | `/lojas`              | Cria uma nova loja                |
| GET    | `/lojas/agregacao`    | Agrega lojas por estado           |
| GET    | `/ganhadores`         | Lista ganhadores                  |

👉 Documentação no **Swagger**: [http://localhost:8000/api-docs](http://localhost:8000/api-docs)

---

## 🎨 Frontend (Vue 3 + Vite)
- Página de **Lojas Participantes** consumindo `/lojas`
- Cards responsivos com nome, cidade, estado, endereço e CNPJ  
- Estilo moderno com **CSS Grid + hover effects**

Exemplo de card:
```vue
<div v-for="loja in lojas" :key="loja._id" class="card">
  <h3>{{ loja.nome }}</h3>
  <p>{{ loja.cidade }} - {{ loja.estado }}</p>
</div>
```

---

## 🖼️ Preview
### Tela de Lojas Participantes
<img src="https://i.ibb.co/VYv3khW/shop-dashboard.png" alt="preview" width="600">

---

## 📌 Como Contribuir
1. Faça um **fork** do projeto  
2. Crie uma branch: `git checkout -b minha-feature`  
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`  
4. Suba a branch: `git push origin minha-feature`  
5. Abra um **Pull Request** 🚀

---

## 👨‍💻 Autor
Feito com ❤️ por [**Daniel Anderson**](https://github.com/seu-usuario)  
📧 dev.danielanderson@gmail.com.br
