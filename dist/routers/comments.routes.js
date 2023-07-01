"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controllers_1 = require("../controllers/comments.controllers");
const users_middlewares_1 = require("../middlewares/users.middlewares");
const adverts_middlewares_1 = require("../middlewares/adverts.middlewares");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const comments_schemas_1 = require("../schemas/comments.schemas");
const commentRoutes = (0, express_1.Router)();
commentRoutes.post("/:id", (0, validateData_middleware_1.default)(comments_schemas_1.createCommentSchema), users_middlewares_1.verifyToken, adverts_middlewares_1.validateIfAdvertExists, comments_controllers_1.createCommentController);
commentRoutes.get("/:id", adverts_middlewares_1.validateIfAdvertExists, comments_controllers_1.retriveCommentController);
exports.default = commentRoutes;
