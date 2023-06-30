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
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = __importDefault(require("../../data-source"));
const erros_1 = require("../../erros");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const user_schemas_1 = require("../../schemas/user.schemas");
const createLoginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findUser = yield userRepository.findOne({
        where: {
            email: loginData.email,
        },
    });
    if (!findUser) {
        throw new erros_1.AppError("Invalid credentials", 401);
    }
    const comparePassword = yield (0, bcryptjs_1.compare)(loginData.password, findUser.password);
    if (!comparePassword) {
        throw new erros_1.AppError("Invalid credentials", 401);
    }
    const token = jsonwebtoken_1.default.sign({
        username: findUser.name,
        email: findUser.email,
        admin: findUser.is_admin,
        id: findUser.id,
    }, String(process.env.SECRET_KEY), {
        expiresIn: String(process.env.EXPIRES_IN),
        subject: String(findUser.id),
    });
    const user = user_schemas_1.returnUserSchema.parse(findUser);
    return {
        token: token,
        user: user,
    };
});
exports.default = createLoginService;
