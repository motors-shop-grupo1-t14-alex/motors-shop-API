import AppDataSource from "../../data-source";
import CommentAdvertUser from "../../entities/comment.advert.user.entity";
import {
    ICommentRepo,
    ICreateComment,
} from "../../interfaces/comments.interfaces";

export const updateCommentService = async (
    id: number,
    data: ICreateComment
) => {
    const commentRepo: ICommentRepo =
        AppDataSource.getRepository(CommentAdvertUser);

    const oldData = await commentRepo.findOneBy({ id: id });

    const comment = commentRepo.create({
        ...oldData,
        ...data,
    });

    await commentRepo.save(comment);

    return comment;
};
