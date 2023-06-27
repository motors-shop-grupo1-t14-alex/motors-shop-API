import { z } from "zod";
import { Repository } from "typeorm";
import CommentAdvertUser from "../entities/comment.advert.user.entity";
import { createCommentSchema } from "../schemas/comments.schemas";

type ICommentRepo = Repository<CommentAdvertUser>;
type ICreateComment = z.infer<typeof createCommentSchema>;

export type { ICommentRepo, ICreateComment };
