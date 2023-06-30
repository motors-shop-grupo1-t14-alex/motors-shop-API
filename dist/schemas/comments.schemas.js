"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnCommentSchema = exports.createCommentSchema = void 0;
const zod_1 = require("zod");
const createCommentSchema = zod_1.z.object({
    comment: zod_1.z.string(),
});
exports.createCommentSchema = createCommentSchema;
const returnCommentSchema = createCommentSchema.extend({
    id: zod_1.z.number(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    user: zod_1.z
        .object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    })
        .or(zod_1.z.number())
        .optional(),
});
exports.returnCommentSchema = returnCommentSchema;
