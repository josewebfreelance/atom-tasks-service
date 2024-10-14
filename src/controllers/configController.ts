import {Request, Response} from 'express';
import {handleHttpError} from "../util/handleHttp";
import {post} from "../services/configService";
import {errorValidatorSchema} from "../util/util";

const register = async (req: Request, res: Response) => {
    try {
        errorValidatorSchema(req, res);

        const response = await post(req.body);
        res.send(response);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
};

export {register}
