import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iUserRepo } from "../../interfaces/users.interfaces";
import { userSchemaMultiples } from "../../schemas/user.schemas";

export const listUserService = async () => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const user = await userRepository.find();

    const newUser = userSchemaMultiples.parse(user);

    return newUser;
};
