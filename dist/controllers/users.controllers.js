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
exports.readSellerByIdController = exports.resetPasswordController = exports.sendEmailResetPasswordController = exports.deleteUserController = exports.updateUserController = exports.retriveUserController = exports.createUserController = void 0;
const createUser_service_1 = __importDefault(require("../services/users/createUser.service"));
const retriveUser_servives_1 = __importDefault(require("../services/users/retriveUser.servives"));
const updateUser_service_1 = __importDefault(require("../services/users/updateUser.service"));
const deleteUser_service_1 = __importDefault(require("../services/users/deleteUser.service"));
const sendEmail_service_1 = __importDefault(require("../services/users/sendEmail.service"));
const resetPassword_service_1 = __importDefault(require("../services/users/resetPassword.service"));
const readSeller_service_1 = __importDefault(require("../services/users/readSeller.service"));
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield (0, createUser_service_1.default)(userData);
    return res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const retriveUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const user = yield (0, retriveUser_servives_1.default)(id);
    return res.json(user);
});
exports.retriveUserController = retriveUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const userID = +req.params.id;
    const updatedUser = yield (0, updateUser_service_1.default)(userData, userID);
    return res.json(updatedUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteUser_service_1.default)(+req.params.id);
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
const sendEmailResetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    yield (0, sendEmail_service_1.default)(email);
    return res.json({ message: "token send" });
});
exports.sendEmailResetPasswordController = sendEmailResetPasswordController;
const resetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    const { token } = req.params;
    yield (0, resetPassword_service_1.default)(password, token);
    return res.json({ message: "password change with success" });
});
exports.resetPasswordController = resetPasswordController;
const readSellerByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const seller = yield (0, readSeller_service_1.default)(userId);
    return res.status(200).json(seller);
});
exports.readSellerByIdController = readSellerByIdController;
