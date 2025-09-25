import express from "express";
import cors from "cors";
import { connectDB } from "./infrastructure/db/DataBase.js"; 
import ganhadorRoutes from './infrastructure/routes/ganhadoresRoutes.js';
import lojaRoutes from './infrastructure/routes/lojasRoutes.js';
import authRoutes from "./infrastructure/routes/authRoutes.js";
import { swaggerUi, swaggerSpec } from "./infrastructure/swagger/swaggerConfig.js";
import { errorHandler } from "./infrastructure/middleware/errorHandle.js";

const app = express();
const port = process.env.PORT || 8000;

// Habilita JSON
app.use(express.json());

// CORS para frontend (host e container)
app.use(cors({
  origin: ["http://localhost:5173", "http://frontend:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Conecta MongoDB
connectDB();

// Rota raiz
app.get("/", (req, res) => {
  res.send("API com MongoDB 🚀");
});

// Rotas
app.use('/ganhadores', ganhadorRoutes);
app.use('/lojas', lojaRoutes);
app.use("/", authRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware de erro
app.use(errorHandler);

// Listen em 0.0.0.0 para permitir acesso externo do host
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Swagger docs em http://localhost:${port}/api-docs`);
});
