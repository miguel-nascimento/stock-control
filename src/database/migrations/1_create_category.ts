import Knex from "knex";

export async function up(knex: Knex){
    // Criar a tabela
    return knex.schema.createTable('category', table => {
        table.increments('id').primary() 
        table.string('category').notNullable()
    })
}

export async function down(knex: Knex){
    // Caso seja necessario voltar atrás (deletar lol)
    return knex.schema.dropTable('category')
}