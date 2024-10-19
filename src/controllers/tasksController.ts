import {Request, Response} from 'express'
import {handleHttpError} from '../util/handleHttp'
import {deleteItem, post, put, search} from '../services/tasksService'
import {tokenDecode} from "../util/util";
import {Token} from "../interfaces/Token";

const getTasks = async (req: Request, res: Response) => {
    const token: Token = tokenDecode(req.headers['authorization']) as Token;
    try {
        const response = await search(token.payload.user_id, req.query.search ? req.query.search.toLocaleString() : '')
        res.send(response)
    } catch (e: any) {
        handleHttpError(res, e.message)
    }
}

const createTask = async (req: Request, res: Response) => {
    const token: Token = tokenDecode(req.headers['authorization']) as Token;

    try {
        const response = await post(token.payload.user_id ,req.body)
        res.send(response)
    } catch (e: any) {
        handleHttpError(res, e.message)
    }
}

const updateTask = async (req: Request, res: Response) => {
    try {
        const response = await put(req.params.id, req.body)
        res.send(response)
    } catch (e: any) {
        handleHttpError(res, e.message)
    }
}

const deleteTask = async (req: Request, res: Response) => {
    try {
        const response = await deleteItem(req.params.id)
        res.send(response)
    } catch (e: any) {
        handleHttpError(res, e.message)
    }
}

export {getTasks, createTask, updateTask, deleteTask}
