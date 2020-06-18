import Knex from "knex";

export async function up(knex: Knex){
    // Criar a tabela
    return knex.schema.createTable('items_category', table => {
        table.integer('item_id').notNullable().references('id').inTable('items')
        table.integer('category_id').notNullable().references('id').inTable('category')
    })
}

export async function down(knex: Knex){
    // Caso seja necessario voltar atrás (deletar lol)
    return knex.schema.dropTable('items_category')
}