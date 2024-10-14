import crypto from "crypto";
import {validationResult} from "express-validator";
import {Request, Response} from 'express';

const salt = 'SdQD99LCcQH2nd<X6eciM3&|$5thi[QBn4#|M3!AY_$Qj/y!x#,6B|MwZlU~Ch--';

const passwordEncrypt = (password: string): string => {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

const errorValidatorSchema  = (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.send({ errors: errors.array() });
        return;
    }
}

export { passwordEncrypt, errorValidatorSchema };
