import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iCreateUser, iReturnUser, iUserRepo } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

const createUserService = async (userData: iCreateUser): Promise<iReturnUser> => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}

export default createUserService