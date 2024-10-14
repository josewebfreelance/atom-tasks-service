import {Request, Response} from 'express';
import {handleHttpError} from "../util/handleHttp";
import {deleteItem, post, put, search} from "../services/tasksService";
import {errorValidatorSchema} from "../util/util";

const getTasks = async (req: Request, res: Response) => {
    try {
        const response = await search(req.query.search);
        res.send(response);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
};

const createTask = async (req: Request, res: Response) => {
    try {
        errorValidatorSchema(req, res);

        const response = await post(req.body);
        res.send(response);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
};

const updateTask = async (req: Request, res: Response) => {
    try {
        errorValidatorSchema(req, res);

        const response = await put(req.params.id, req.body);
        res.send(response);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
}

const deleteTask = async (req: Request, res: Response) => {
    try {
        const response = await deleteItem(req.params.id);
        res.send(response);
    } catch (e: any) {
        handleHttpError(res, e.message);
    }
}

export {getTasks, createTask, updateTask, deleteTask}
