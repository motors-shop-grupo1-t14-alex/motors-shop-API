import AppDataSource from "../../data-source";
import {  Advert } from "../../entities/adverts.entity";
import GalleryImage from "../../entities/gallery.images.entity";
import { iAdvertRepo } from "../../interfaces/adverts.interfaces";
import { iGalleryImagesRepo } from "../../interfaces/galleryImages.interfaces";

const removeAdvertService = async (advertId: number): Promise<void> => {
    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)
    const galleryImagesRepository: iGalleryImagesRepo = AppDataSource.getRepository(GalleryImage)

    const advert = Object(await advertRepository.findOneBy({
        id: advertId
    }))

    await galleryImagesRepository.delete({ advert: advert });

    await advertRepository.remove(advert!)
}

export default removeAdvertService