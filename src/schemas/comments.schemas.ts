import { z } from "zod";

const createCommentSchema = z.object({
    comment: z.string(),
    // created_at: z.string().optional(),
});

const returnCommentSchema = createCommentSchema.extend({
    id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    user: z
        .object({
            id: z.number(),
            name: z.string(),
        })
        .or(z.number())
        .optional(),
});

export { createCommentSchema, returnCommentSchema };
