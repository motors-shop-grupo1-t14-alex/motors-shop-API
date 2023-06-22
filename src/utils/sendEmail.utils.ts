import { createTransport } from "nodemailer";
import { iEmailRequest } from "../interfaces/email.interfaces";
import { AppError } from "../erros";
import Mailgen from "mailgen";

export const sendEmail = async ({to, subject, text}: iEmailRequest): Promise<void> => {

    const transporter = createTransport({
        host: "smtp-mail.outlook.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        html: text
    }).then(() => {
        console.log("Email send with success")
    }).catch((err) => {
        console.error(err)
        throw new AppError("Error sending email, try again later", 500)
    })
}

export const resetPasswordTemplate = (userName: string, userEmail: string, resetToken: string) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Solicitação de alteração de senha',
            link: 'http://localhost:5173/'
        }
    });

    const email = {
        body: {
            name: userName,
            intro: 'You have received this email because a password reset request for your account was received.',
            action: {
                instructions: 'Click the button below to reset your password:',
                button: {
                    color: '#DC4D2F',
                    text: 'Reset your password',
                    link: `http://localhost:5173/passwordRecovery/${resetToken}`
                }
            },
            outro: 'If you did not request a password reset, no further action is required on your part.'
        }
    }

    const emailBody = mailGenerator.generate(email)

    const emailTemplete = {
        to: userEmail,
        subject: "Reset password",
        text: emailBody
    }

    return emailTemplete
}