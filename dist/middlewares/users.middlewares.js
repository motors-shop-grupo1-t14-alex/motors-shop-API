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
exports.verifyToken = exports.validatePhoneExists = exports.validateCpfExists = exports.validateIdExists = exports.validateEmailExists = exports.validateIfUserIsAdminOrSeller = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const users_entity_1 = __importDefault(require("../entities/users.entity"));
const erros_1 = require("../erros");
const jsonwebtoken_1 = require("jsonwebtoken");
const validateIfUserIsAdminOrSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(res.locals.userId);
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findUser = yield userRepository.findOne({
        where: {
            id: userId,
        },
    });
    console.log(findUser);
    if (!findUser.is_admin && !findUser.is_seller) {
        throw new erros_1.AppError("Insufficient permission", 401);
    }
    next();
});
exports.validateIfUserIsAdminOrSeller = validateIfUserIsAdminOrSeller;
const validateEmailExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(res.locals.userId);
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findEmail = yield userRepository.findOne({
        where: {
            email: req.body.email,
        },
    });
    if (findEmail && req.body.email && userId !== findEmail.id) {
        throw new erros_1.AppError("Email already exists", 409);
    }
    next();
});
exports.validateEmailExists = validateEmailExists;
const validateIdExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findId = yield userRepository.findOne({
        where: {
            id: id,
        },
    });
    if (!findId) {
        throw new erros_1.AppError("User not found", 409);
    }
    next();
});
exports.validateIdExists = validateIdExists;
const validateCpfExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(res.locals.userId);
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findCpf = yield userRepository.findOne({
        where: {
            cpf: req.body.cpf,
        },
    });
    if (findCpf && req.body.cpf && userId !== findCpf.id) {
        throw new erros_1.AppError("CPF already exists", 409);
    }
    next();
});
exports.validateCpfExists = validateCpfExists;
const validatePhoneExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(res.locals.userId);
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findPhone = yield userRepository.findOne({
        where: {
            cellphone: req.body.cellphone,
        },
    });
    if (findPhone && req.body.cellphone && userId !== findPhone.id) {
        throw new erros_1.AppError("Cellphone already exists", 409);
    }
    next();
});
exports.validatePhoneExists = validatePhoneExists;
const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token || token == "Bearer") {
        throw new erros_1.AppError("Missing bearer token", 401);
    }
    token = token.split(" ")[1];
    return (0, jsonwebtoken_1.verify)(token, String(process.env.SECRET_KEY), (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (error)
            throw new erros_1.AppError(error.message, 401);
        if (!decoded) {
            throw new erros_1.AppError("invalid signature", 401);
        }
        req.user = {
            id: decoded.sub,
            admin: decoded.admin,
            email: decoded.email,
        };
        return next();
    }));
};
exports.verifyToken = verifyToken;
