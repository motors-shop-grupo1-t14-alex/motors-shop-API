import { Request, Response, NextFunction } from "express";
import { iUserRepo } from "../interfaces/users.interfaces";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../erros";

const validateIfUserIsAdminOrSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId: number = Number(res.locals.userId)

    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!findUser!.is_admin && !findUser!.is_seller){
        throw new AppError("Insufficient permission", 401)
    }

    next()
}

export {
    validateIfUserIsAdminOrSeller
}

