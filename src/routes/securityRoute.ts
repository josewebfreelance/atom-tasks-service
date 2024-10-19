import express from 'express'
import { login } from '../controllers/securityController'
import { loginCheck } from '../middlewares/fieldCheckScheme'
import { validateRequest } from '../middlewares/validateRequest'

const router = express.Router()

router.post('/api/auth/login', loginCheck, validateRequest, login)

export default router
