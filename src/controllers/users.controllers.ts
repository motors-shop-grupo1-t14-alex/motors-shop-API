import { Request, Response } from "express";
import { iCreateUser } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import retriveUserService from "../services/users/retriveUser.servives";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

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

const updateUserController = async (req: Request, res: Response) => {
    const userData = req.body;
    const userID: number = +req.params.id;

    const updatedUser = await updateUserService(userData, userID)

    return res.json(updatedUser)
}

export const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(+req.params.id);
  
    return res.status(204).send();
  };

export { createUserController, retriveUserController, updateUserController };
