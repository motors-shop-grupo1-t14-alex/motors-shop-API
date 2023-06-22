import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iReturnUser, iUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

const updateUserService = async (userData: iUserUpdate, userID: number): Promise<iReturnUser> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: userID
    })
    
    const user = userRepository.create({
        ...oldUserData,
        ...userData,
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser
}

export default updateUserService