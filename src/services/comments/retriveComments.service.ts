import AppDataSource from "../../data-source";
import { Advert } from "../../entities/adverts.entity";
import CommentAdvertUser from "../../entities/comment.advert.user.entity";

export const retriveCommentsServices = async (advertId: number) => {
    const commentRepo = await AppDataSource.getRepository(CommentAdvertUser)

    const advertsRepo = AppDataSource.getRepository(Advert)

    const advert = await advertsRepo.findOneBy({id: advertId})

    const comments = await commentRepo.find({
        where: {
            advert: advert!
        },
        relations: {
            user: true
        },
        select: {
            user: {
                name: true
            }
        }
    })

    return comments;
};
