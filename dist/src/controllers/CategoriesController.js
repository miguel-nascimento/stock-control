"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class CategoriesController {
    async index(request, response) {
        const category = await connection_1.default('category').select('*'); // SELECT * FROM category
        return response.json(category);
    }
}
exports.default = CategoriesController;
