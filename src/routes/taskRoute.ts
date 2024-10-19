import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/tasksController'
import { taskCheck } from '../middlewares/fieldCheckScheme'
import { validateRequest } from '../middlewares/validateRequest'
import { verifyToken } from '../middlewares/verifyToken'

const router = express.Router()

router.get('/api/tasks', verifyToken, getTasks)

router.post('/api/tasks', taskCheck, validateRequest, verifyToken, createTask)

router.put('/api/tasks/:id', taskCheck, validateRequest, verifyToken, updateTask)

router.delete('/api/tasks/:id', verifyToken, deleteTask)

export default router
