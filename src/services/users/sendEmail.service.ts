import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { randomUUID } from "crypto";
import { AppError } from "../../erros";
import { iUserRepo } from "../../interfaces/users.interfaces";
import { resetPasswordTemplate, sendEmail } from "../../utils/sendEmail.utils";

const sendEmailResetPasswordService = async (email: string) => {

    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findEmail = await userRepository.findOneBy({
        email: email
    })

    if (!findEmail) {
        throw new AppError("user not found", 404)
    }

    const resetToken = randomUUID()

    const user = userRepository.create({
        ...findEmail,
        ...{reset_password: resetToken},
    })

    await userRepository.save(user)

    const resetPassword = resetPasswordTemplate( findEmail.name, email, resetToken)

    await sendEmail(resetPassword)

}

export default sendEmailResetPasswordService