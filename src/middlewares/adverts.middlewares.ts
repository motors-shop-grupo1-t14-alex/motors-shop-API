import { Request, Response, NextFunction } from "express";
import { iAdvertRepo } from "../interfaces/adverts.interfaces";
import AppDataSource from "../data-source";
import { Advert } from "../entities/adverts.entity";
import { AppError } from "../erros";
import { iUserRepo } from "../interfaces/users.interfaces";
import User from "../entities/users.entity";

const validateIfAdvertExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const advertId: number = Number(req.params.id)

    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)

    const findAdvert = await advertRepository.findOne({
        where: {
            id: advertId
        }
    })

    if (!findAdvert) {
        throw new AppError("Advert not found", 404)
    }

    next()
}

const validateIfUserIsOwnerAdvertOrAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const advertId: number = Number(req.params.id)
    const userId: number = Number(res.locals.userId)

    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const findAdvert = await advertRepository.findOne({
        where: {
            id: advertId
        },
        relations: {
            user: true
        }
    })

    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    const userOwnerAdvert = Object(findAdvert!.user)

    if (userId !== userOwnerAdvert.id && !findUser!.is_admin) {
        throw new AppError("Insufficient permission", 401)
    }

   next()
}

export { 
    validateIfAdvertExists,
    validateIfUserIsOwnerAdvertOrAdmin,
}