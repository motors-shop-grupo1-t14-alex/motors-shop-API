import { Request, Response } from "express";
import { iCreateUser } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: iCreateUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

export {
    createUserController,
}