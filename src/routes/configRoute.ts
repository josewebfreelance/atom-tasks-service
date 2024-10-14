import express from "express";
import {register} from "../controllers/configController";
import {registerCheck} from "../middlewares/fieldCheck";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *     - Configuration
 *     summary: Registro de usuarios
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               password:
 *                 type: string
 *               creation:
 *                 type: string
 *     responses:
 *       200:
 *         description: A successful response
 */
router.post('/api/users', registerCheck, register);

export default router;
