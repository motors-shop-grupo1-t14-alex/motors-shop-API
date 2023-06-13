import { Request, Response } from "express";
import iLoginRequest from "../interfaces/login.interface";
import createLoginService from "../services/login/createLogin.service";

const createLoginController = async (req: Request, res: Response) => {
    const loginData: iLoginRequest = req.body

    const tokenAndUser = await createLoginService(loginData)

    return res.status(200).json(tokenAndUser)
}

export default createLoginController