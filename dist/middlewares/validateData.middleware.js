"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const erros_1 = require("../erros");
const validateData = (schema) => (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        throw new erros_1.AppError("Invalid data", 400);
    }
    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    next();
};
exports.default = validateData;
