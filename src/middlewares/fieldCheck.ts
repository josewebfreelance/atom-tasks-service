import {checkSchema} from "express-validator";

const emailCheck = {
    isEmail: true,
    errorMessage: 'Correo inválido',
    isLength: {
        options: {max: 25},
        errorMessage: {
            max: 'Máximo 25 caracteres'
        }
    }
};

const passwordCheck = {
    isStrongPassword: true,
    errorMessage: 'Valor incorrecto',
    isLength: {
        options: {max: 50},
        errorMessage: {
            max: 'Máximo 50 caracteres'
        }
    }
};

const loginCheck = checkSchema({
    email: emailCheck,
    password: passwordCheck
});

const registerCheck = checkSchema({
    email: emailCheck,
    password: passwordCheck,
    name: {
        isLength: {
            options: {min: 6, max: 25},
            errorMessage: {
                min: 'Mínimo 6 caracteres',
                max: 'Máximo 25 caracteres'
            }
        }
    },
    lastName: {
        isLength: {
            options: {min: 6, max: 25},
            errorMessage: {
                min: 'Mínimo 6 caracteres',
                max: 'Máximo 25 caracteres'
            }
        }
    }
});

const taskCheck = checkSchema({
    title: {
        notEmpty: {
            errorMessage: 'Campo requerido'
        },
        isLength: {
            options: {min: 6, max: 100},
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
            options: {min: 6, max: 150},
            errorMessage: {
                min: 'Mínimo 6 caracteres',
                max: 'Máximo 150 caracteres'
            }
        }
    }
});

export {loginCheck, registerCheck, taskCheck}
