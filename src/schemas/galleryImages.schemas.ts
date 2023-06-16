import { z } from "zod";

const createGalleryImagesSchema = z.object({
    url_image: z.string().url().max(255)
})

const returnGalleryImagesSchema = createGalleryImagesSchema.extend({
    id: z.number()
})

const updateGalleryImagesSchema = createGalleryImagesSchema.partial()

export {
    createGalleryImagesSchema,
    updateGalleryImagesSchema,
    returnGalleryImagesSchema,
}
