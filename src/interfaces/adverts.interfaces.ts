import { z } from "zod";
import { createAdvertSchema, returnAdvertSchema, returnAllAdvertsSchema, updateAdvertSchema } from "../schemas/adverts.schemas";
import { Repository } from "typeorm";
import { Advert } from "../entities/adverts.entity";

type iCreateAdvert = z.infer<typeof createAdvertSchema>
type iReturnAdvert = z.infer<typeof returnAdvertSchema>
type iUpdateAdvert = z.infer<typeof updateAdvertSchema>
type iReturnAllAdverts = z.infer<typeof returnAllAdvertsSchema>
type iAdvertRepo = Repository<Advert>

interface iPagination {
    prevPage: string | null 
    nextPage: string | null
    count: number
    data: iReturnAllAdverts
}

export {
    iCreateAdvert,
    iReturnAdvert,
    iUpdateAdvert,
    iReturnAllAdverts,
    iAdvertRepo,
    iPagination,
}