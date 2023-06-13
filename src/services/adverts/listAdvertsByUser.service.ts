import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { AppError } from "../../erros";
import { iReturnUser, iUserRepo } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

const listAdvertsByUserService = async (userId: number): Promise<iReturnUser> => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const getAllAdvertsByUser = await userRepository.createQueryBuilder("user")
        .innerJoinAndSelect("user.adverts", "user_adverts")
        .innerJoinAndSelect("user_adverts.gallery_images", "user_adverts_gallery_images")
        .where("user.id = :user", {user: userId})
        .getOne()

    if (!getAllAdvertsByUser) {
        throw new AppError("You have no adverts", 404)
    }

    const allAdvertsByUser = returnUserSchema.parse(getAllAdvertsByUser)

    return allAdvertsByUser
}

export default listAdvertsByUserService
