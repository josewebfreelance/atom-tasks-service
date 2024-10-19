import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tasks services',
      version: '1.0.0',
      description: 'Tasks system'
    },
    servers: [
      {
        url: `https://us-central1-atom-task-application.cloudfunctions.net/atom-tasks-service`
      }
    ],
  },
  apis: ['./src/routes/*.ts', '../routes/*.js'] // Path to your API routes
}

const specs = swaggerJsdoc(options)

export { specs, swaggerUi }
