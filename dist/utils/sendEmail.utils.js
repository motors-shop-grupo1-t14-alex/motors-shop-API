"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordTemplate = exports.sendEmail = void 0;
const nodemailer_1 = require("nodemailer");
const erros_1 = require("../erros");
const mailgen_1 = __importDefault(require("mailgen"));
const sendEmail = ({ to, subject, text }) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = (0, nodemailer_1.createTransport)({
        host: "smtp-mail.outlook.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    yield transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        html: text
    }).then(() => {
        console.log("Email send with success");
    }).catch((err) => {
        console.error(err);
        throw new erros_1.AppError("Error sending email, try again later", 500);
    });
});
exports.sendEmail = sendEmail;
const resetPasswordTemplate = (userName, userEmail, resetToken) => {
    const mailGenerator = new mailgen_1.default({
        theme: 'default',
        product: {
            name: 'Solicitação de alteração de senha',
            link: 'http://localhost:5173/'
        }
    });
    const email = {
        body: {
            greeting: 'Olá',
            signature: 'Obrigado',
            name: userName,
            intro: 'Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta na Motors Shop foi solicitada.',
            action: {
                instructions: 'Clique no botão abaixo para redefinir sua senha:',
                button: {
                    color: '#4529E6',
                    text: 'Redefinir sua senha',
                    link: `http://localhost:5173/passwordRecovery/${resetToken}`
                }
            },
            outro: 'Se você não solicitou uma redefinição de senha, basta ignorar este e-mail.'
        }
    };
    const emailBody = mailGenerator.generate(email);
    const emailTemplete = {
        to: userEmail,
        subject: "Redefinir senha",
        text: emailBody
    };
    return emailTemplete;
};
exports.resetPasswordTemplate = resetPasswordTemplate;
