import { checkSchema } from 'express-validator'

const emailCheck = {
  isEmail: true,
  errorMessage: 'Correo inválido',
  isLength: {
    options: { max: 50 },
    errorMessage: {
      max: 'Máximo 50 caracteres'
    }
  }
}

const passwordCheck = {
  isStrongPassword: true,
  errorMessage: 'Valor incorrecto',
  isLength: {
    options: { max: 50 },
    errorMessage: {
      max: 'Máximo 50 caracteres'
    }
  }
}

const loginCheck = checkSchema({
  email: emailCheck,
  password: passwordCheck
})

const registerCheck = checkSchema({
  email: emailCheck,
  password: passwordCheck,
  displayName: {
    isLength: {
      options: { min: 6, max: 50 },
      errorMessage: {
        min: 'Mínimo 6 caracteres',
        max: 'Máximo 50 caracteres'
      }
    }
  }
})

const taskCheck = checkSchema({
  title: {
    notEmpty: {
      errorMessage: 'Campo requerido'
    },
    isLength: {
      options: { min: 6, max: 100 },
      errorMessage: {
        min: 'Mínimo 6 caracteres',
        max: 'Máximo 100 caracteres'
      }
    }
  },
  description: {
    notEmpty: {
      errorMessage: 'Campo requerido'
    },
    isLength: {
      options: { min: 6, max: 150 },
      errorMessage: {
        min: 'Mínimo 6 caracteres',
        max: 'Máximo 150 caracteres'
      }
    }
  }
})

export { loginCheck, registerCheck, taskCheck }
