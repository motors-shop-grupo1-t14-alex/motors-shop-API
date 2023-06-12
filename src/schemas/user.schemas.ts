import { z } from "zod";
import { createGalleryImagesSchema } from "./galleryImages.schemas";

const createUserSchema = z.object({
    name: z.string().max(127),
    email: z.string().email().max(127),
    password: z.string().max(255),
    cpf: z.string().max(11),
    cellphone: z.string().max(11),
    birth_date: z.string(),
    description: z.string().nullable(),
    is_seller: z.boolean().default(false),
    is_admin: z.boolean().default(false),
})

const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    adverts: z.array(z.object({
        id: z.number(),
        brand: z.string().max(127),
        model: z.string().max(255),
        year: z.number().int(),
        fuel_type: z.enum(["Flex", "Híbrido", "Elétrico"]).default("Flex"),
        mileage: z.string().max(50),
        color: z.string().max(20),
        fipe_price: z.number().or(z.string()),
        price: z.number().or(z.string()),
        description: z.string(),
        cover_image: z.string().url().max(255),
        is_published: z.boolean().default(true),
        created_at: z.string(),
        updated_at: z.string(),
        gallery_images: z.array(createGalleryImagesSchema),
    })),
}).omit({ password: true })

export {
    createUserSchema,
    returnUserSchema,
}