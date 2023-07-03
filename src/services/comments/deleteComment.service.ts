import AppDataSource from "../../data-source";
import CommentAdvertUser from "../../entities/comment.advert.user.entity";
import { ICommentRepo } from "../../interfaces/comments.interfaces";

export const deleteCommentService = async (id: number) => {
    const commentRepo: ICommentRepo =
        AppDataSource.getRepository(CommentAdvertUser);

    const comment = await commentRepo.findOneBy({ id: id });

    await commentRepo.remove(comment!);
};
