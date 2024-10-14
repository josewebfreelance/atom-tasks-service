import admin, {ServiceAccount} from 'firebase-admin'
import serviceAccount from './sdk-config.json'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

export const db = admin.firestore();

/* CONFIGURACION TEMPORAL PARA CONEXION A EMULADOR */
db.settings({
    host: '127.0.0.1',
    port: 8080,
    ssl: false
})
