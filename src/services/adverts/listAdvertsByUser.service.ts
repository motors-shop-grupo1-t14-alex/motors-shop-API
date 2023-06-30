import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iUserRepo } from "../../interfaces/users.interfaces";
import { iAdvertRepo, iPagination } from "../../interfaces/adverts.interfaces";
import { returnAllAdvertsSchema } from "../../schemas/adverts.schemas";
import { Advert } from "../../entities/adverts.entity";

const listAdvertsByUserService = async (userId: number, reqQuery:any): Promise<iPagination> => {
    let perPage: number = Number(reqQuery.perPage) || 16
    let page: number = Number(reqQuery.page) || 1

    perPage < 0 || perPage > 16 ? perPage = 16 : perPage
    page < 0 ? page = 1 : page

    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)
    const userRepository: iUserRepo = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({ 
        where: {
            id: userId
        }
    });

    const getAdverts = await advertRepository.find({
        where: {
            user: user!
        },
        take: perPage,
        skip: perPage * (page - 1),
        relations: {
            user: true,
            gallery_images: true
        }
    })

    const allAdverts = returnAllAdvertsSchema.parse(getAdverts)

    const getAllAdverts = await advertRepository.find({
        where: {
            user: user!
        }
    })

    const baseUrl: string = `http://localhost:3000/adverts/user`
    let prevPage: string | null = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    let nextPage: string | null = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    if (page >= Math.ceil(getAllAdverts.length / perPage)) {
        nextPage = null
    }
    if (page === 1) {
        prevPage = null
    }

    const pagination: iPagination = {
        prevPage,
        nextPage,
        count: allAdverts.length,
        data: allAdverts
    }

    return pagination
}

export default listAdvertsByUserService