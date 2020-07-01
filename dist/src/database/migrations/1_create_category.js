"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    // Criar a tabela
    return knex.schema.createTable('category', table => {
        table.increments('id').primary();
        table.string('category').notNullable();
    });
}
exports.up = up;
async function down(knex) {
    // Caso seja necessario voltar atrás (deletar lol)
    return knex.schema.dropTable('category');
}
exports.down = down;
