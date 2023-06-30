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
const typeorm_1 = require("typeorm");
const adverts_entity_1 = require("./adverts.entity");
const users_entity_1 = __importDefault(require("./users.entity"));
let CommentAdvertUser = class CommentAdvertUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], CommentAdvertUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], CommentAdvertUser.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
    }),
    __metadata("design:type", Object)
], CommentAdvertUser.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
    }),
    __metadata("design:type", Object)
], CommentAdvertUser.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.default, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], CommentAdvertUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => adverts_entity_1.Advert, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], CommentAdvertUser.prototype, "advert", void 0);
CommentAdvertUser = __decorate([
    (0, typeorm_1.Entity)("comment_advert_users")
], CommentAdvertUser);
exports.default = CommentAdvertUser;
