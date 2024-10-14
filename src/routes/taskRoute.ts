import express from "express";
import {createTask, deleteTask, getTasks, updateTask} from "../controllers/tasksController";

const router = express.Router();

router.get('/api/tasks', getTasks);

router.post('/api/tasks', createTask);

router.put('/api/tasks/:id', updateTask);

router.delete('/api/tasks/:id', deleteTask);

export default router;
