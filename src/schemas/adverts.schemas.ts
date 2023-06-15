import { z } from "zod";
import { createGalleryImagesSchema } from "./galleryImages.schemas";

const createAdvertSchema = z.object({
    brand: z.string().max(127),
    model: z.string().max(255),
    year: z.number().int(),
    fuel_type: z.enum(["Flex", "Híbrido", "Elétrico"]).default("Flex"),
    mileage: z.string().max(50),
    color: z.string().max(20),
    fipe_price: z.number(),
    price: z.number(),
    description: z.string(),
    cover_image: z.string().url().max(255),
    gallery_images: z.array(createGalleryImagesSchema)
    .min(1, "Gallery_images must contain at least 1 url_image")
    .max(6, "Gallery_images must contain at most 6 url_image"),
})

const returnAdvertSchema = createAdvertSchema.extend({
    id: z.number(),
    is_published: z.boolean().default(true),
    created_at: z.string(),
    updated_at: z.string(),
    user: z.object({
        id: z.number(),
        name: z.string(),
    }).or(z.number()).optional(),
    fipe_price: z.union([z.number(), z.string()]),
    price: z.union([z.number(), z.string()]),
})

const updateAdvertSchema = createAdvertSchema.partial()

const returnAllAdvertsSchema = z.array(returnAdvertSchema)

export {
    createAdvertSchema,
    returnAdvertSchema,
    updateAdvertSchema,
    returnAllAdvertsSchema,
}

