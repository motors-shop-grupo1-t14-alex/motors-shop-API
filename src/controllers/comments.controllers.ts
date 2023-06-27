import { Request, Response } from "express";
import { createCommentService } from "../services/comments/createComment.service";
import { retriveCommentsServices } from "../services/comments/retriveComments.service";

export const createCommentController = async (req: Request, res: Response) => {
    const advertId: number = +req.params.id;
    const createComment = await createCommentService(
        req.body,
        advertId,
        +req.user.id
    );

    return res.status(201).json(createComment);
};

export const retriveCommentController = async (req: Request, res: Response) => {
    const advertId: number = +req.params.id;
    const comments = await retriveCommentsServices(advertId);

    return res.json(comments);
};
