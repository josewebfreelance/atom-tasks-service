import {User} from "../models/User";
import {db} from "../config/db";
import admin from "firebase-admin";
import {passwordEncrypt} from "../util/util";
import {handleHttpSuccess} from "../util/handleHttp";

const collectionName = 'users';

const post = async (entity: User): Promise<any> => {
    const user = db.collection(collectionName).doc();

    const userToSave = {
        email: entity.email,
        name: entity.name,
        lastName: entity.lastName,
        password: passwordEncrypt(entity.password),
        creation: admin.firestore.Timestamp.now()
    };

    await user.set(userToSave);
    return handleHttpSuccess();
}

export {post}
