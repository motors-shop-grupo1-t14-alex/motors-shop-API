import { Request, Response } from "express";
import { iCreateAdvert, iUpdateAdvert } from "../interfaces/adverts.interfaces";
import createAdvertService from "../services/adverts/createAdvert.service";
import listAllAdvertsService from "../services/adverts/listAllAdverts.service";
import updateAdvertService from "../services/adverts/updateAdvert.service";
import removeAdvertService from "../services/adverts/removeAdvert.service";
import listAdvertsByUserService from "../services/adverts/listAdvertsByUser.service";

const createAdvertController = async (req: Request, res: Response) => {
    const advertData: iCreateAdvert = req.body
    const userId: number = Number(res.locals.userId)

    const newAdvert = await createAdvertService(advertData, userId)

    return res.status(201).json(newAdvert)
}

const listAllAdvertsController = async (req: Request, res: Response) => {
    const reqQuery:any = req.query 

    const allAdverts = await listAllAdvertsService(reqQuery)

    return res.status(200).json(allAdverts)
}

const updateAdvertController = async (req: Request, res: Response) => {
    const advertId: number = Number(req.params.id)
    const advertData: iUpdateAdvert = req.body

    const updatedAdvert = await updateAdvertService(advertId, advertData)

    return res.status(200).json(updatedAdvert)
}

const removeAdvertController = async (req: Request, res: Response) => {
    const advertId: number = Number(req.params.id)

    await removeAdvertService(advertId)

    return res.status(204).send()
}

const listAdvertsByUserController = async (req: Request, res: Response) => {
    const userId: number = Number(res.locals.userId)

    const allAdvertsByUser = await listAdvertsByUserService(userId)

    return res.status(200).json(allAdvertsByUser)
}

export {
    createAdvertController,
    listAllAdvertsController,
    updateAdvertController,
    removeAdvertController,
    listAdvertsByUserController,
}