"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    // Criar a tabela
    return knex.schema.createTable('items_category', table => {
        table.integer('item_id').notNullable().references('id').inTable('items');
        table.integer('category_id').notNullable().references('id').inTable('category');
    });
}
exports.up = up;
async function down(knex) {
    // Caso seja necessario voltar atrás (deletar lol)
    return knex.schema.dropTable('items_category');
}
exports.down = down;
