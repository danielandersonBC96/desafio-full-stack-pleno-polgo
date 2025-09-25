import express from 'express';
import { LojaController } from '../http/controller/lojaController.js';
import { MongoLojaRepository } from '../db/repositories/mongoLojaRepository.js';
import { authenticateJWT } from '../middleware/authMiddlewere.js';
import { limiter } from '../middleware/limiter.js';

const router = express.Router();
const repo = new MongoLojaRepository();
const controller = new LojaController(repo);

/**
 * @swagger
 * tags:
 *   name: Lojas
 *   description: Endpoints para gerenciar lojas
 */

/**
 * @swagger
 * /lojas/agregacao:
 *   get:
 *     summary: Lista lojas agregadas por estado
 *     tags: [Lojas]
 *     responses:
 *       200:
 *         description: Lista de lojas agregadas
 */
router.get('/agregacao', controller.agregacao);

/**
 * @swagger
 * /lojas:
 *   get:
 *     summary: Lista todas as lojas
 *     tags: [Lojas]
 *     responses:
 *       200:
 *         description: Lista de lojas
 */
router.get('/', controller.lista);

/**
 * @swagger
 * /lojas/{id}:
 *   get:
 *     summary: Busca uma loja pelo ID
 *     tags: [Lojas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da loja
 *     responses:
 *       200:
 *         description: Loja encontrada
 *       404:
 *         description: Loja não encontrada
 */
router.get('/:id', controller.buscar);

/**
 * @swagger
 * /lojas:
 *   post:
 *     summary: Cria uma nova loja
 *     tags: [Lojas]
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
 *               cnpj:
 *                 type: string
 *     responses:
 *       201:
 *         description: Loja criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', authenticateJWT, limiter, controller.criar);

/**
 * @swagger
 * /lojas/{id}:
 *   put:
 *     summary: Atualiza uma loja pelo ID
 *     tags: [Lojas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da loja
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
 *               cnpj:
 *                 type: string
 *     responses:
 *       200:
 *         description: Loja atualizada com sucesso
 *       404:
 *         description: Loja não encontrada
 */
router.put('/:id', authenticateJWT, limiter, controller.atualizar);

/**
 * @swagger
 * /lojas/{id}:
 *   delete:
 *     summary: Deleta uma loja pelo ID
 *     tags: [Lojas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da loja
 *     responses:
 *       200:
 *         description: Loja deletada com sucesso
 *       404:
 *         description: Loja não encontrada
 */
router.delete('/:id', authenticateJWT, limiter, controller.deletar);

export default router;
