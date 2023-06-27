import { Request, Response, NextFunction } from "express";
import { iUserRepo } from "../interfaces/users.interfaces";
import AppDataSource from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../erros";
import { verify } from "jsonwebtoken";

const validateIfUserIsAdminOrSeller = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(res.locals.userId);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    console.log(findUser);

    if (!findUser!.is_admin && !findUser!.is_seller) {
        throw new AppError("Insufficient permission", 401);
    }

    next();
};

const validateEmailExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(res.locals.userId);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findEmail = await userRepository.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (findEmail && req.body.email && userId !== findEmail.id) {
        throw new AppError("Email already exists", 409);
    }

    next();
};

const validateIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = +req.params.id;
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findId = await userRepository.findOne({
        where: {
            id: id,
        },
    });

    if (!findId) {
        throw new AppError("User not found", 409);
    }

    next();
};

const validateCpfExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(res.locals.userId);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findCpf = await userRepository.findOne({
        where: {
            cpf: req.body.cpf,
        },
    });

    if (findCpf && req.body.cpf && userId !== findCpf.id) {
        throw new AppError("CPF already exists", 409);
    }

    next();
};

const validatePhoneExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(res.locals.userId);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findPhone = await userRepository.findOne({
        where: {
            cellphone: req.body.cellphone,
        },
    });

    if (findPhone && req.body.cellphone && userId !== findPhone.id) {
        throw new AppError("Cellphone already exists", 409);
    }

    next();
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token: string = req.headers.authorization!;

    if (!token || token == "Bearer") {
        throw new AppError("Missing bearer token", 401);
    }

    token = token.split(" ")[1];

    return verify(
        token,
        String(process.env.SECRET_KEY),
        async (error: any, decoded: any) => {
            if (error) throw new AppError(error.message, 401);

            if (!decoded) {
                throw new AppError("invalid signature", 401);
            }

            req.user = {
                id: decoded.sub,
                admin: decoded.admin,
                email: decoded.email,
            };

            return next();
        }
    );
};

export {
    validateIfUserIsAdminOrSeller,
    validateEmailExists,
    validateIdExists,
    validateCpfExists,
    validatePhoneExists,
    verifyToken,
};
