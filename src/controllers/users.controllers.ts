import { Request, Response } from "express";
import { iCreateUser } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import retriveUserService from "../services/users/retriveUser.servives";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import sendEmailResetPasswordService from "../services/users/sendEmail.service";
import resetPasswordService from "../services/users/resetPassword.service";
import readSellerByIdService from "../services/users/readSeller.service";

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

const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(+req.params.id);
  
    return res.status(204).send();
};

const sendEmailResetPasswordController = async (req: Request, res: Response) => {
    const { email } = req.body

    await sendEmailResetPasswordService(email)

    return res.json({ message: "token send" })
}

const resetPasswordController = async (req: Request, res: Response) => {
    const { password } = req.body
    const { token } = req.params

    await resetPasswordService(password, token)

    return res.json({message: "password change with success"})
}

const readSellerByIdController = async (req: Request, res: Response) => {

    const userId = req.params.id

    const seller = await readSellerByIdService(userId)

    return res.status(200).json(seller)
}

export { createUserController, retriveUserController, updateUserController, deleteUserController, sendEmailResetPasswordController, resetPasswordController, readSellerByIdController };
