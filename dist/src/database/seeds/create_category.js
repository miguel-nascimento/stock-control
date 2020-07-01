"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    await knex('category').insert([
        { category: "Armas" },
        { category: "Acessorios" },
        { category: "Bebidas" },
        { category: "Medicamentos" }
    ]);
}
exports.seed = seed;
