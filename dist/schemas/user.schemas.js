"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.returnUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const galleryImages_schemas_1 = require("./galleryImages.schemas");
const address_schemas_1 = require("./address.schemas");
const createUserSchema = zod_1.z.object({
    name: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    password: zod_1.z.string().max(255).min(8),
    cpf: zod_1.z.string().max(11).min(11),
    cellphone: zod_1.z.string().max(11),
    birth_date: zod_1.z.string(),
    description: zod_1.z.string().nullable(),
    is_seller: zod_1.z.boolean().default(false),
    is_admin: zod_1.z.boolean().default(false),
    address: address_schemas_1.createAddressSchema
});
exports.createUserSchema = createUserSchema;
const returnUserSchema = createUserSchema.extend({
    id: zod_1.z.number(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    address: address_schemas_1.returnAddressSchema.optional(),
    adverts: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number(),
        brand: zod_1.z.string().max(127),
        model: zod_1.z.string().max(255),
        year: zod_1.z.number().int(),
        fuel_type: zod_1.z.enum(["Flex", "Híbrido", "Elétrico"]).default("Flex"),
        mileage: zod_1.z.string().max(50),
        color: zod_1.z.string().max(20),
        fipe_price: zod_1.z.number().or(zod_1.z.string()),
        price: zod_1.z.number().or(zod_1.z.string()),
        description: zod_1.z.string(),
        cover_image: zod_1.z.string().url().max(255),
        is_published: zod_1.z.boolean().default(true),
        created_at: zod_1.z.string(),
        updated_at: zod_1.z.string(),
        gallery_images: zod_1.z.array(galleryImages_schemas_1.createGalleryImagesSchema),
    })).optional(),
}).omit({ password: true });
exports.returnUserSchema = returnUserSchema;
const updateUserSchema = createUserSchema.extend({
    address: address_schemas_1.updateAddressSchema
}).partial().omit({ is_admin: true });
exports.updateUserSchema = updateUserSchema;
