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
const adverts_entity_1 = require("../../entities/adverts.entity");
const adverts_schemas_1 = require("../../schemas/adverts.schemas");
const listAllAdvertsService = (reqQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = Number(reqQuery.perPage) || 12;
    let page = Number(reqQuery.page) || 1;
    perPage < 0 || perPage > 12 ? perPage = 12 : perPage;
    page < 0 ? page = 1 : page;
    const advertRepository = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const getAdverts = yield advertRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        relations: {
            user: true,
            gallery_images: true
        }
    });
    const allAdverts = adverts_schemas_1.returnAllAdvertsSchema.parse(getAdverts);
    const getAllAdverts = yield advertRepository.find();
    const baseUrl = `http://localhost:3000/adverts`;
    let prevPage = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
    let nextPage = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
    if (page >= Math.ceil(getAllAdverts.length / perPage)) {
        nextPage = null;
    }
    if (page === 1) {
        prevPage = null;
    }
    const pagination = {
        prevPage,
        nextPage,
        count: allAdverts.length,
        data: allAdverts
    };
    return pagination;
});
exports.default = listAllAdvertsService;
