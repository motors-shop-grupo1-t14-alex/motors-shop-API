import { Request, Response } from "express";
import { iCreateUser } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import retriveUserService from "../services/users/retriveUser.servives";

const createUserController = async (req: Request, res: Response) => {
    const userData: iCreateUser = req.body;

    const newUser = await createUserService(userData);

    return res.status(201).json(newUser);
};

const retriveUserController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    const user = await retriveUserService(id);

    return res.json(user);
};

export { createUserController, retriveUserController };
