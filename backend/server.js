import express from "express";
import cors from "cors";
import { connectDB } from "./infrastructure/db/DataBase.js"; 
import ganhadorRoutes from './infrastructure/routes/ganhadoresRoutes.js';
import lojaRoutes from './infrastructure/routes/lojasRoutes.js';
import authRoutes from "./infrastructure/routes/authRoutes.js";
import { swaggerUi, swaggerSpec } from "./infrastructure/swagger/swaggerConfig.js";
import { errorHandler } from "./infrastructure/middleware/errorHandle.js";

const app = express();

// Habilita JSON
app.use(express.json());

// CORS configurado
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // front local
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

// **Export para Vercel**
export default app;
