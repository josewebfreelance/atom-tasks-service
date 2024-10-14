import {db} from "../config/db";
import {passwordEncrypt} from "../util/util";

const collectionName = 'users';

const find = async (values: any): Promise<any> => {
    const result = await db.collection(collectionName).where('email', '==', values.email).get();

    if (result.empty) return null;
    const data = result.docs[0].data();

    const newPassword = passwordEncrypt(values.password);

    if (data.password !== newPassword) throw new Error('Contraseña inválida');

    return data;
}

export {find}
