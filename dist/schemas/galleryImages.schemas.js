"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGalleryImagesSchema = exports.updateGalleryImagesSchema = exports.createGalleryImagesSchema = void 0;
const zod_1 = require("zod");
const createGalleryImagesSchema = zod_1.z.object({
    url_image: zod_1.z.string().url().max(255)
});
exports.createGalleryImagesSchema = createGalleryImagesSchema;
const returnGalleryImagesSchema = createGalleryImagesSchema.extend({
    id: zod_1.z.number()
});
exports.returnGalleryImagesSchema = returnGalleryImagesSchema;
const updateGalleryImagesSchema = createGalleryImagesSchema.partial();
exports.updateGalleryImagesSchema = updateGalleryImagesSchema;
