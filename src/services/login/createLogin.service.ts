import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { AppError } from "../../erros";
import jwt from "jsonwebtoken";
import "dotenv/config";
import iLoginRequest from "../../interfaces/login.interface";
import { iUserRepo } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entity";

const createLoginService = async (loginData: iLoginRequest): Promise<string> => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        email: loginData.email
    })

    if (!findUser) {
        throw new AppError("Invalid credentials", 401)
    }

    const comparePassword = await compare(loginData.password, findUser.password)

    if (!comparePassword) {
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        { username: findUser.name },
        String(process.env.SECRET_KEY!),
        {
            expiresIn: String(process.env.EXPIRES_IN),
            subject: String(findUser.id)
        }
    )

    return token

}

export default createLoginService 