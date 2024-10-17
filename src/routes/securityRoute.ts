import express from 'express'
import { login } from '../controllers/securityController'
import { loginCheck } from '../middlewares/fieldCheckScheme'
import { validateRequest } from '../middlewares/validateRequest'

const router = express.Router()

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *     - Security
 *     summary: Inicio de sesión
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: A successful response
 */
router.post('/api/auth/login', loginCheck, validateRequest, login)

export default router
