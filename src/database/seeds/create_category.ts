import Knex from "knex";

export async function seed(knex: Knex){
    await knex('category').insert([
        { category: "Armas"},
        { category: "Acessorios"},
        { category: "Bebidas"},
        { category: "Medicamentos"}
    ])
}