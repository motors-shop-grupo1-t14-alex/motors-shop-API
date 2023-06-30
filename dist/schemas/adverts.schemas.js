"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnAllAdvertsSchema = exports.updateAdvertSchema = exports.returnAdvertSchema = exports.createAdvertSchema = void 0;
const zod_1 = require("zod");
const galleryImages_schemas_1 = require("./galleryImages.schemas");
const createAdvertSchema = zod_1.z.object({
    brand: zod_1.z.string().max(127),
    model: zod_1.z.string().max(255),
    year: zod_1.z.number().int(),
    fuel_type: zod_1.z.enum(["Flex", "Híbrido", "Elétrico"]).default("Flex"),
    mileage: zod_1.z.string().max(50),
    color: zod_1.z.string().max(20),
    fipe_price: zod_1.z.number(),
    price: zod_1.z.number(),
    description: zod_1.z.string(),
    cover_image: zod_1.z.string().url().max(255),
    gallery_images: zod_1.z.array(galleryImages_schemas_1.createGalleryImagesSchema)
        .min(1, "Gallery_images must contain at least 1 url_image")
        .max(6, "Gallery_images must contain at most 6 url_image"),
});
exports.createAdvertSchema = createAdvertSchema;
const returnAdvertSchema = createAdvertSchema.extend({
    id: zod_1.z.number(),
    is_published: zod_1.z.boolean().default(true),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    user: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    }).or(zod_1.z.number()).optional(),
    fipe_price: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    price: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
exports.returnAdvertSchema = returnAdvertSchema;
const updateAdvertSchema = createAdvertSchema.extend({
    is_published: zod_1.z.boolean().default(true),
}).partial();
exports.updateAdvertSchema = updateAdvertSchema;
const returnAllAdvertsSchema = zod_1.z.array(returnAdvertSchema);
exports.returnAllAdvertsSchema = returnAllAdvertsSchema;
