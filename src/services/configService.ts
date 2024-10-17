import { User } from '../models/User'
import admin from 'firebase-admin'
import { handleHttpSuccess } from '../util/handleHttp'

const post = async (entity: User): Promise<any> => {
  const { email, password, displayName } = entity

  const user = await admin.auth().createUser({
    email,
    password,
    displayName
  })

  return handleHttpSuccess({
    userId: user.uid,
    email: user.email,
    displayName: user.displayName,
    message: 'Usuario creado exitosamente'
  })
}

export { post }
