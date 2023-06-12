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

const validateEmailExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId: number = Number(res.locals.userId)
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const findEmail = await userRepository.findOne({
        where: {
            email: req.body.email
        }
    })

    if (findEmail && req.body.email && userId !== findEmail.id) {
        throw new AppError("Email already exists", 409)
    }

    next()
}

const validateCpfExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId: number = Number(res.locals.userId)
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const findCpf = await userRepository.findOne({
        where: {
            cpf: req.body.cpf
        }
    })

    if (findCpf && req.body.cpf && userId !== findCpf.id) {
        throw new AppError("CPF already exists", 409)
    }

    next()
}

const validatePhoneExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId: number = Number(res.locals.userId)
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const findPhone = await userRepository.findOne({
        where: {
            cellphone: req.body.cellphone
        }
    })

    if (findPhone && req.body.cellphone && userId !== findPhone.id) {
        throw new AppError("Cellphone already exists", 409)
    }

    next()
}

export {
    validateIfUserIsAdminOrSeller,
    validateEmailExists,
    validatePhoneExists,
    validateCpfExists,
}

