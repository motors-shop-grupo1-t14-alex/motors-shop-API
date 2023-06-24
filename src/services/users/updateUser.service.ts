import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iReturnUser, iUserRepo, iUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";
import { iAddressRepo } from "../../interfaces/address.interfaces";
import { Address, States } from "../../entities/addresses.entity";

const updateUserService = async (userData: iUserUpdate | any, userID: number): Promise<iReturnUser>=> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User)
    const addressRepository: iAddressRepo= AppDataSource.getRepository(Address)

    const { address, ...rest } = userData

    if (address) {
        const oldAddressData = await addressRepository.findOneBy({
            user: userID
        })

        const newAddress = addressRepository.create({
            ...oldAddressData,
            ...address,
            uf: address.uf as States
        })

        await addressRepository.save(newAddress)
    }

    const oldUserData = await userRepository.findOne({
        where: {
            id: userID,
        },
        relations: {
            address: true
        }
    })
    
    const user = userRepository.create({
        ...oldUserData,
        ...rest,
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser
}

export default updateUserService