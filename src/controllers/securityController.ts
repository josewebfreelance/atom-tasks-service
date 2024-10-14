import {Request, Response} from 'express';
import {handleHttpError} from "../util/handleHttp";
import {find} from "../services/securityService";
import {errorValidatorSchema} from "../util/util";

const login = async (req: Request, res: Response) => {
    try {
        errorValidatorSchema(req, res);

        const response = await find(req.body);
        res.send(response);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
}

export { login }
