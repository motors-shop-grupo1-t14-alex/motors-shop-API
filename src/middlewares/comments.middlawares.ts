import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { ICommentRepo } from "../interfaces/comments.interfaces";
import CommentAdvertUser from "../entities/comment.advert.user.entity";
import { AppError } from "../erros";

const validateIfCommentExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const advertId: number = Number(req.params.id);
    const commentRepo: ICommentRepo =
        AppDataSource.getRepository(CommentAdvertUser);

    const findComment = await commentRepo.findOne({
        where: {
            id: advertId,
        },
    });

    if (!findComment) {
        throw new AppError("Comment not found", 404);
    }

    next();
};

export { validateIfCommentExists };
