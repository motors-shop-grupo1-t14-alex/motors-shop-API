import AppDataSource from "../../data-source";
import { Advert } from "../../entities/adverts.entity";
import CommentAdvertUser from "../../entities/comment.advert.user.entity";
import User from "../../entities/users.entity";
import { iAdvertRepo } from "../../interfaces/adverts.interfaces";
import {
    ICommentRepo,
    ICreateComment,
} from "../../interfaces/comments.interfaces";
import { iUserRepo } from "../../interfaces/users.interfaces";

export const createCommentService = async (
    comment: ICreateComment,
    advertId: number,
    userId: number
) => {
    const advertRepo: iAdvertRepo = AppDataSource.getRepository(Advert);
    const advert = await advertRepo.findOneBy({ id: advertId });

    const userRepo: iUserRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: userId });

    const commentRepo: ICommentRepo =
        AppDataSource.getRepository(CommentAdvertUser);

    const commentNew = {
        ...comment,
        user: userId,
        advert: advertId,
    };

    const newComment = commentRepo.create(commentNew);
    await commentRepo.save(newComment);

    return newComment;
};
