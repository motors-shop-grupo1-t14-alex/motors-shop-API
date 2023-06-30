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
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const erros_1 = require("../../erros");
const resetPasswordService = (password, resetToken) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const user = yield userRepository.findOneBy({
        reset_password: resetToken
    });
    if (!user) {
        throw new erros_1.AppError("user not found", 404);
    }
    const oldUserData = yield userRepository.findOneBy({
        id: user.id
    });
    const updatedUser = userRepository.create(Object.assign(Object.assign({}, oldUserData), {
        password: (0, bcryptjs_1.hashSync)(password, 10),
        reset_password: null
    }));
    yield userRepository.save(updatedUser);
});
exports.default = resetPasswordService;
