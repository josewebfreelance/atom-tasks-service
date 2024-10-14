import {Response} from 'express';

const handleHttpError = (res: Response, error: string) => {
    res.status(500);
    res.send({error});
};

const handleHttpSuccess = (data: any = {}, message: string = 'Operación exitosa') => {
    return {
        success: true,
        message,
        data
    }
};

export { handleHttpError, handleHttpSuccess };
