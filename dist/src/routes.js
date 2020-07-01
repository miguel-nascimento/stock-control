"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemsController_1 = __importDefault(require("./controllers/ItemsController"));
const CategoriesController_1 = __importDefault(require("./controllers/CategoriesController"));
const itemsController = new ItemsController_1.default();
const categoriesController = new CategoriesController_1.default();
const routes = express_1.default.Router();
routes.get('/', (request, response) => {
    return response.json({ message: "No route specified, but hi user!" });
});
routes.get('/category', categoriesController.index);
//TODO: FIX ME, items are not going to the sqlite3 database
routes.get('/items', itemsController.index);
routes.get('/items/:id', itemsController.show);
routes.post('/items', itemsController.create);
routes.delete('/items/:id', itemsController.delete);
routes.put('/items/:id', itemsController.update);
exports.default = routes;
