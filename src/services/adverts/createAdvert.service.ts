import AppDataSource from "../../data-source";
import {  Advert, FuelType } from "../../entities/adverts.entity";
import { iAdvertRepo, iCreateAdvert, iReturnAdvert } from "../../interfaces/adverts.interfaces";
import { returnAdvertSchema } from "../../schemas/adverts.schemas";

const createAdvertService = async (advertData: iCreateAdvert, userId: number): Promise<iReturnAdvert> => {
    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)

    const advert = advertRepository.create({
        ...advertData,
        user: userId,
        fuel_type: advertData.fuel_type as FuelType
    })

    await advertRepository.save(advert)

    const getAdvert = await advertRepository.findOne({
        where: {
            id: advert.id
        },
        relations: {
            gallery_images: true
        }
    })

    const newAdvert = returnAdvertSchema.parse(getAdvert)

    return newAdvert
}

export default createAdvertService