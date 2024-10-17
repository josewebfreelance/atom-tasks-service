import crypto from "crypto";

const salt = 'SdQD99LCcQH2nd<X6eciM3&|$5thi[QBn4#|M3!AY_$Qj/y!x#,6B|MwZlU~Ch--';

const passwordEncrypt = (password: string): string => {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

export { passwordEncrypt};
