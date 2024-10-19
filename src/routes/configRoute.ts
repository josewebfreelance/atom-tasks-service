import express from 'express'
import { register } from '../controllers/configController'
import { registerCheck } from '../middlewares/fieldCheckScheme'
import { validateRequest } from '../middlewares/validateRequest'

const router = express.Router()

router.post('/api/users', registerCheck, validateRequest, register)

export default router
