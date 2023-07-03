import { updateCommentService } from "./../services/comments/updateComment.service";
import { Request, Response } from "express";
import { createCommentService } from "../services/comments/createComment.service";
import { retriveCommentsServices } from "../services/comments/retriveComments.service";
import { deleteCommentService } from "../services/comments/deleteComment.service";

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

export const deleteCommentController = async (req: Request, res: Response) => {
    const commentId: number = +req.params.id;
    const deleteComment = await deleteCommentService(commentId);

    return res.status(204).send();
};

export const updateCommentController = async (req: Request, res: Response) => {
    const commentId: number = +req.params.id;
    const updateComment = await updateCommentService(commentId, req.body);

    return res.json(updateComment);
};
