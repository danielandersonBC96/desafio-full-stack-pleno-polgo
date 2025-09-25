
import express from "express";
import dotenv from "dotenv";
import { generateToken } from "../security/jwtConfig.js";
import { authenticateJWT } from "../middleware/authMiddlewere.js"; // nome correto

dotenv.config();
const router = express.Router();

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticação e JWT
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Faz login e retorna um token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Token JWT gerado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Usuário ou senha inválidos
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    const token = generateToken({ username });
    return res.json({ token });
  }

  return res.status(401).json({ error: "Usuário ou senha inválidos" });
});

/**
 * @swagger
 * /protected:
 *   get:
 *     summary: Rota protegida, requer token JWT
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso autorizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Token inválido
 */
router.get("/protected", authenticateJWT, (req, res) => {
  res.json({ message: "Você acessou uma rota protegida!", user: req.user });
});

export default router;
