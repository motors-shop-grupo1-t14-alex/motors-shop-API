import AppDataSource from "../../data-source";
import { Advert } from "../../entities/adverts.entity";
import { iPagination, iAdvertRepo } from "../../interfaces/adverts.interfaces";
import { returnAllAdvertsSchema } from "../../schemas/adverts.schemas";

const listAllAdvertsService = async (reqQuery:any): Promise<iPagination> => {
    let perPage: number = Number(reqQuery.perPage) || 12
    let page: number = Number(reqQuery.page) || 1

    perPage < 0 || perPage > 12 ? perPage = 12 : perPage
    page < 0 ? page = 1 : page

    const advertRepository: iAdvertRepo = AppDataSource.getRepository(Advert)

    const getAdverts = await advertRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        relations: {
            user: true,
            gallery_images: true
        }
    })

    const allAdverts = returnAllAdvertsSchema.parse(getAdverts)

    const getAllAdverts = await advertRepository.find()

    const baseUrl: string = `http://localhost:3000/adverts`
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

export default listAllAdvertsService