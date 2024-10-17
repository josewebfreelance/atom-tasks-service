import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tasks services',
      version: '1.0.0',
      description: 'Tasks system'
    }
  },
  apis: ['./src/routes/*.ts'] // Path to your API routes
}

const specs = swaggerJsdoc(options)

export { specs, swaggerUi }
