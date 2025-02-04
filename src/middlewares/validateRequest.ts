import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(500).send(errors.array())
    return
  }

  next()
}

export { validateRequest }
