import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {specs, swaggerUi} from './config/swagger'
import 'express-validator'
import configRoute from './routes/configRoute'
import securityRoute from './routes/securityRoute'
import taskRoute from './routes/taskRoute'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(specs))
app.use(cors())
app.use(express.json())
app.use(securityRoute)
app.use(configRoute)
app.use(taskRoute)

// app.listen(+PORT, () => console.log(`Process started in ${+PORT}`));

exports['atom-tasks-service'] = (req: any, res: any) => {
  app(req, res)
}
