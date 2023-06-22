import { Repository } from "typeorm"
import User from "../../entities/users.entity"
import AppDataSource from "../../data-source"

const deleteUserService = async (userID: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userID
    })

    await userRepository.remove(user!)
}

export default deleteUserService