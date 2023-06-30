import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iUserRepo, iUserUpdate } from "../../interfaces/users.interfaces";
import { iAddressRepo } from "../../interfaces/address.interfaces";
import { Address, States } from "../../entities/addresses.entity";

const updateUserService = async (userData: iUserUpdate, userID: number): Promise<User | null>=> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User)
    const addressRepository: iAddressRepo = AppDataSource.getRepository(Address)

    const { address, ...rest } = userData

    const oldUserData = await userRepository.findOne({
        where: {
            id: userID,
        },
        relations: {
            address: true
        }
    })

    if (address && oldUserData) {

        const oldAddressData = await addressRepository.findOneBy({
            user: oldUserData
        })

        const newAddress = addressRepository.create({
            ...oldAddressData,
            ...address,
            uf: address.uf as States
        })

        await addressRepository.save(newAddress)
    }

    const user = userRepository.create({
        ...oldUserData,
        ...rest,
    })

    await userRepository.save(user)

    const newUser = await userRepository.findOne({
        where: {
            id: userID,
        },
        relations: {
            address: true
        }
    })
    
    return newUser
}

export default updateUserService