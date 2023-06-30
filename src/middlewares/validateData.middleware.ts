import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../erros";

const validateData = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).length === 0) {
        throw new AppError("Invalid data", 400)
    }

    const validatedData = schema.parse(req.body)

    req.body = validatedData

    next()
}

export default validateData