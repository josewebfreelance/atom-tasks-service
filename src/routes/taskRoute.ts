import express from "express";
import {createTask, deleteTask, getTasks, updateTask} from "../controllers/tasksController";
import {taskCheck} from "../middlewares/fieldCheck";

const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     tags:
 *     - Operation
 *     summary: Lista tareas
 *     parameters:
 *         - in: path
 *           name: search
 *           schema:
 *             type: string
 *           description: Campo de búsqueda
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get('/api/tasks', getTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags:
 *     - Operation
 *     summary: Creación de tareas
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
router.post('/api/tasks', taskCheck, createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     tags:
 *     - Operation
 *     summary: Actualización de tareas
 *     parameters:
 *      - in: path
 *        name: taskId
 *        schema:
 *          type: string
 *          description: Campo de búsqueda por Id
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
router.put('/api/tasks/:id', taskCheck, updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     tags:
 *     - Operation
 *     summary: Elimina tarea
 *     parameters:
 *      - in: path
 *        name: taskId
 *        schema:
 *          type: string
 *          description: Campo Id para eliminar
 *     responses:
 *       200:
 *         description: A successful response
 */
router.delete('/api/tasks/:id', deleteTask);

export default router;
