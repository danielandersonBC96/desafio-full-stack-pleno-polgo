FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expor a porta padrão do Vite
EXPOSE 5173

# Rodar o Vite no modo dev e aceitar conexões externas
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
