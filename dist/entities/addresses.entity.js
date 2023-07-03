"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.States = exports.Address = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = __importDefault(require("./users.entity"));
var States;
(function (States) {
    States["ACRE_AC"] = "AC";
    States["ALAGOAS_AL"] = "AL";
    States["AMAPA_AP"] = "AP";
    States["AMAZONAS_AM"] = "AM";
    States["BAHIA_BA"] = "BA";
    States["CEARA_CE"] = "CE";
    States["DISTRITO_FEDERAL_DF"] = "DF";
    States["ESPIRITO_SANTO_ES"] = "ES";
    States["GOIAS_GO"] = "GO";
    States["MARANHAO_MA"] = "MA";
    States["MATO_GROSSO_MT"] = "MT";
    States["MATO_GROSSO_DO_SUL_MS"] = "MS";
    States["MINAS_GERAIS_MG"] = "MG";
    States["PARA_PA"] = "PA";
    States["PARAIBA_PB"] = "PB";
    States["PARANA_PR"] = "PR";
    States["PERNAMBUCO_PE"] = "PE";
    States["PIAUI_PI"] = "PI";
    States["RIO_DE_JANEIRO_RJ"] = "RJ";
    States["RIO_GRANDE_DO_NORTE_RN"] = "RN";
    States["RIO_GRANDE_DO_SUL_RS"] = "RS";
    States["RONDONIA_RO"] = "RO";
    States["RORAIMA_RR"] = "RR";
    States["SANTA_CATARINA_SC"] = "SC";
    States["SAO_PAULO_SP"] = "SP";
    States["SERGIPE_SE"] = "SE";
    States["TOCANTINS_TO"] = "TO";
})(States || (exports.States = States = {}));
let Address = class Address {
};
exports.Address = Address;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    __metadata("design:type", String)
], Address.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2, enum: [States.ACRE_AC, States.ALAGOAS_AL, States.AMAPA_AP, States.AMAZONAS_AM, States.BAHIA_BA, States.CEARA_CE, States.DISTRITO_FEDERAL_DF, States.ESPIRITO_SANTO_ES, States.GOIAS_GO, States.MARANHAO_MA, States.MATO_GROSSO_DO_SUL_MS, States.MATO_GROSSO_MT, States.MINAS_GERAIS_MG, States.PARAIBA_PB, States.PARANA_PR, States.PARA_PA, States.PERNAMBUCO_PE, States.PIAUI_PI, States.RIO_DE_JANEIRO_RJ, States.RIO_GRANDE_DO_NORTE_RN, States.RIO_GRANDE_DO_SUL_RS, States.RONDONIA_RO, States.RORAIMA_RR, States.SANTA_CATARINA_SC, States.SAO_PAULO_SP, States.SERGIPE_SE, States.TOCANTINS_TO], default: States.ACRE_AC }),
    __metadata("design:type", String)
], Address.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Address.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.default, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], Address.prototype, "user", void 0);
exports.Address = Address = __decorate([
    (0, typeorm_1.Entity)("adresses")
], Address);
