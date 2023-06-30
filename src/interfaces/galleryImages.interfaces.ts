import { z } from "zod" ;
import { createGalleryImagesSchema, returnGalleryImagesSchema, updateGalleryImagesSchema } from "../schemas/galleryImages.schemas";
import { Repository } from "typeorm";
import GalleryImage from "../entities/gallery.images.entity";

type iCreateGalleryImages = z.infer<typeof createGalleryImagesSchema>
type iReturnGalleryImages = z.infer<typeof returnGalleryImagesSchema>
type iUpdateGalleryImages = z.infer<typeof updateGalleryImagesSchema>
type iGalleryImagesRepo = Repository<GalleryImage>

export {
    iCreateGalleryImages,
    iReturnGalleryImages,
    iUpdateGalleryImages,
    iGalleryImagesRepo,
}