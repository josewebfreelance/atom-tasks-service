import { Request, Response } from 'express'
import { handleHttpError } from '../util/handleHttp'
import { find } from '../services/securityService'

const login = async (req: Request, res: Response) => {
  try {
    const response = await find(req.body)

    res.send(response.data)
  } catch (e: any) {
    handleHttpError(res, e.message)
  }
}

export { login }
