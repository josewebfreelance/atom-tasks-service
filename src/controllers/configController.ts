import {Request, Response} from 'express';
import {handleHttpError} from "../util/handleHttp";
import {post} from "../services/configService";

const register = async (req: Request, res: Response) => {
    try {
        const response = await post(req.body);

        res.status(201).send(response.data);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
};

export {register}
