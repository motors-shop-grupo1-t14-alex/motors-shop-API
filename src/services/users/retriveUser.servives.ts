import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import {
    iCreateUser,
    iReturnUser,
    iUserRepo,
} from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

const retriveUserService = async (id: number): Promise<iReturnUser> => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ 
        where: {
            id: id 
        },
        relations: {
            address: true
        }
    });

    const newUser = returnUserSchema.parse(user);

    return newUser;
};

export default retriveUserService;
