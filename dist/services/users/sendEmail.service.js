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
const data_source_1 = __importDefault(require("../../data-source"));
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const crypto_1 = require("crypto");
const erros_1 = require("../../erros");
const sendEmail_utils_1 = require("../../utils/sendEmail.utils");
const sendEmailResetPasswordService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findEmail = yield userRepository.findOneBy({
        email: email
    });
    if (!findEmail) {
        throw new erros_1.AppError("user not found", 404);
    }
    const resetToken = (0, crypto_1.randomUUID)();
    const user = userRepository.create(Object.assign(Object.assign({}, findEmail), { reset_password: resetToken }));
    yield userRepository.save(user);
    const resetPassword = (0, sendEmail_utils_1.resetPasswordTemplate)(findEmail.name, email, resetToken);
    yield (0, sendEmail_utils_1.sendEmail)(resetPassword);
});
exports.default = sendEmailResetPasswordService;
