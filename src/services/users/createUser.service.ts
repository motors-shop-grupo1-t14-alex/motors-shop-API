import AppDataSource from "../../data-source";
import { Address, States } from "../../entities/addresses.entity";
import User from "../../entities/users.entity";
import { iAddressRepo } from "../../interfaces/address.interfaces";
import { iCreateUser, iReturnUser, iUserRepo } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";

const createUserService = async (userData: iCreateUser): Promise<iReturnUser> => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User)
    const addressRepository: iAddressRepo = AppDataSource.getRepository(Address)

    const address = addressRepository.create({
    ...userData.address,
    uf: userData.address.uf as States
    })

    await addressRepository.save(address)

    const user = userRepository.create({
        ...userData,
        address: address
    })

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}

export default createUserService