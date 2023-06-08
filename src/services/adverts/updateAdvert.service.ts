import AppDataSource from "../../data-source";
import {  Advert } from "../../entities/adverts.entity";
import GalleryImage from "../../entities/gallery.images.entity";
import { iAdvertRepo, iReturnAdvert, iUpdateAdvert } from "../../interfaces/adverts.interfaces";
import { iGalleryImagesRepo } from "../../interfaces/galleryImages.interfaces";
import { returnAdvertSchema } from "../../schemas/adverts.schemas";

const updateAdvertService = async (advertId: number, advertData: iUpdateAdvert | any): Promise<iReturnAdvert> => {
    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)
    const galleryImagesRepository: iGalleryImagesRepo = AppDataSource.getRepository(GalleryImage)

    const oldAdvert = Object(await advertRepository.findOneBy({
        id: advertId
    }))

    if (advertData.gallery_images) {
        await galleryImagesRepository.delete({ advert: oldAdvert });
    }

    const advert = Object(advertRepository.create({
        ...oldAdvert,
        ...advertData,
    }))

    await advertRepository.save(advert)

    const getAdvert = await advertRepository.findOne({
        where: {
            id: advert.id
        },
        relations: {
            gallery_images: true
        }
    })

    const updatedAdvert = returnAdvertSchema.parse(getAdvert)

    return updatedAdvert
}

export default updateAdvertService