import express from "express";
import { GanhadorController } from "../http/controller/ganhadorController.js";
import { MongoGanhadorRepository } from "../db/repositories/mongoGanhadorRepository.js";
import { authenticateJWT } from "../middleware/authMiddlewere.js";
import { limiter } from "../middleware/limiter.js";

const router = express.Router();
const repo = new MongoGanhadorRepository();
const controller = new GanhadorController(repo);

// NOVA ROTA - Agregação por estado (deve vir antes da rota com :id)
/**
 * @swagger
 * /ganhadores/agregacao:
 *   get:
 *     summary: Retorna total de ganhadores por estado
 *     tags: [Ganhadores]
 *     responses:
 *       200:
 *         description: Contagem de ganhadores por estado
 */
router.get("/agregacao",  controller.agregacao);


/**
 * @swagger
 * tags:
 *   name: Ganhadores
 *   description: Rotas de gerenciamento de ganhadores
 */

/**
 * @swagger
 * /ganhadores:
 *   get:
 *     summary: Lista todos os ganhadores
 *     tags: [Ganhadores]
 *     responses:
 *       200:
 *         description: Lista de ganhadores
 */
router.get("/", controller.lista);

/**
 * @swagger
 * /ganhadores/{id}:
 *   get:
 *     summary: Busca um ganhador pelo ID
 *     tags: [Ganhadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do ganhador
 *     responses:
 *       200:
 *         description: Ganhador encontrado
 *       404:
 *         description: Ganhador não encontrado
 */
router.get("/:id", controller.buscar);

/**
 * @swagger
 * /ganhadores:
 *   post:
 *     summary: Cria um novo ganhador
 *     tags: [Ganhadores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               estado:
 *                 type: string
 *               cidade:
 *                 type: string
 *               premio:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ganhador criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", authenticateJWT, limiter, controller.criar);

/**
 * @swagger
 * /ganhadores/{id}:
 *   put:
 *     summary: Atualiza um ganhador pelo ID
 *     tags: [Ganhadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do ganhador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               estado:
 *                 type: string
 *               cidade:
 *                 type: string
 *               premio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ganhador atualizado com sucesso
 *       404:
 *         description: Ganhador não encontrado
 */
router.put("/:id", authenticateJWT, limiter, controller.atualizar);

/**
 * @swagger
 * /ganhadores/{id}:
 *   delete:
 *     summary: Remove um ganhador pelo ID
 *     tags: [Ganhadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do ganhador
 *     responses:
 *       200:
 *         description: Ganhador removido com sucesso
 *       404:
 *         description: Ganhador não encontrado
 */
router.delete("/:id", authenticateJWT, limiter, controller.deletar);

export default router;
