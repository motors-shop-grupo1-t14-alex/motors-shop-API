import AppDataSource from "../../data-source";
import { Advert } from "../../entities/adverts.entity";
import User from "../../entities/users.entity";
import { AppError } from "../../erros";

const readSellerByIdService = async (sellerId: string) => {

    const userRepo = AppDataSource.getRepository(User)
    const advertsRepo = AppDataSource.getRepository(Advert)

    const seller = await userRepo.findOneBy({ id: parseInt(sellerId), is_seller: true });

    if (!seller) {
        throw new AppError("Insufficient permission", 401)
    }

    const sellerAdverts = await advertsRepo.findBy({user: seller!})

    const sellerReturn = {
        name: seller?.name,
        description: seller?.description,
        adverts: sellerAdverts
    }

    return sellerReturn
}

export default readSellerByIdService