import { z } from "zod";
import { createGalleryImagesSchema } from "./galleryImages.schemas";
import { createAddressSchema, returnAddressSchema, updateAddressSchema } from "./address.schemas";

const createUserSchema = z.object({
    name: z.string().max(127),
    email: z.string().email().max(127),
    password: z.string().max(255).min(8),
    cpf: z.string().max(11).min(11),
    cellphone: z.string().max(11),
    birth_date: z.string(),
    description: z.string().nullable(),
    is_seller: z.boolean().default(false),
    is_admin: z.boolean().default(false),
    address: createAddressSchema
})

const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    address: returnAddressSchema.optional(),
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
    })).optional(),
}).omit({ password: true })

const updateUserSchema = createUserSchema.extend({
    address: updateAddressSchema
}).partial().omit({ is_admin: true })

export {
    createUserSchema,
    returnUserSchema,
    updateUserSchema
}