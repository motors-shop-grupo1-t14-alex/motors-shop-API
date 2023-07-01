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
exports.readAdvertByIdController = exports.listAdvertsByUserController = exports.removeAdvertController = exports.updateAdvertController = exports.listAllAdvertsController = exports.createAdvertController = void 0;
const createAdvert_service_1 = __importDefault(require("../services/adverts/createAdvert.service"));
const listAllAdverts_service_1 = __importDefault(require("../services/adverts/listAllAdverts.service"));
const updateAdvert_service_1 = __importDefault(require("../services/adverts/updateAdvert.service"));
const removeAdvert_service_1 = __importDefault(require("../services/adverts/removeAdvert.service"));
const listAdvertsByUser_service_1 = __importDefault(require("../services/adverts/listAdvertsByUser.service"));
const readAdvertById_service_1 = __importDefault(require("../services/adverts/readAdvertById.service"));
const createAdvertController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertData = req.body;
    const userId = Number(res.locals.userId);
    const newAdvert = yield (0, createAdvert_service_1.default)(advertData, userId);
    return res.status(201).json(newAdvert);
});
exports.createAdvertController = createAdvertController;
const listAllAdvertsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqQuery = req.query;
    const allAdverts = yield (0, listAllAdverts_service_1.default)(reqQuery);
    return res.status(200).json(allAdverts);
});
exports.listAllAdvertsController = listAllAdvertsController;
const updateAdvertController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = Number(req.params.id);
    const advertData = req.body;
    const updatedAdvert = yield (0, updateAdvert_service_1.default)(advertId, advertData);
    return res.status(200).json(updatedAdvert);
});
exports.updateAdvertController = updateAdvertController;
const removeAdvertController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = Number(req.params.id);
    yield (0, removeAdvert_service_1.default)(advertId);
    return res.status(204).send();
});
exports.removeAdvertController = removeAdvertController;
const listAdvertsByUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(res.locals.userId);
    const reqQuery = req.query;
    const allAdvertsByUser = yield (0, listAdvertsByUser_service_1.default)(userId, reqQuery);
    return res.status(200).json(allAdvertsByUser);
});
exports.listAdvertsByUserController = listAdvertsByUserController;
const readAdvertByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = req.params.id;
    const advert = yield (0, readAdvertById_service_1.default)(advertId);
    return res.status(200).json(advert);
});
exports.readAdvertByIdController = readAdvertByIdController;
