import Knex from "knex";

export async function up(knex: Knex){
    // Criar a tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary() 
        table.string('title').notNullable()
        table.string('image').notNullable()
        table.string('amount').notNullable()
        table.decimal('price').notNullable()
    })
}

export async function down(knex: Knex){
    // Caso seja necessario voltar atrás (deletar lol)
    return knex.schema.dropTable('items')
}