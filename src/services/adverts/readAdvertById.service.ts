import AppDataSource from "../../data-source"
import { Advert } from "../../entities/adverts.entity"
import { iAdvertRepo } from "../../interfaces/adverts.interfaces"

const readAdvertByIdService = async (advertId: string) => {
    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)

    const getAdvertById = await advertRepository.createQueryBuilder("advert")
    .innerJoinAndSelect("advert.user", "advert_user")
    .innerJoinAndSelect("advert.gallery_images", "advert_gallery_images")
    .where("advert.id = :advert", {advert: advertId})
    .getOne()

    return getAdvertById
}

export default readAdvertByIdService