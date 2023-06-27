import AppDataSource from "../../data-source";
import CommentAdvertUser from "../../entities/comment.advert.user.entity";

export const retriveCommentsServices = async (advertId: number) => {
    const values = await AppDataSource.getRepository(CommentAdvertUser)
        .createQueryBuilder("comments")
        .leftJoinAndSelect("comments.advert", "advertId")
        .where("comments.advert = :advertId", { advertId })
        .select("comments")
        .getMany();

    return values;
};
