import knex from '../database/connection'
import {Request, Response} from 'express'
import CategoriesController from './CategoriesController';

// TODO: Add the category field in the index and show method.
// TODO: Fix the category field showing in the show method and 
// implement the same thing in index method.
class ItemsControllers {
    async create (request: Request, response: Response){
        const {title, amount, price, category} = request.body;

        const trx = await knex.transaction() 

        const item = {title, image: 'fake', amount, price}

        const insertedIds = await trx('items').insert(item)
        const item_id = insertedIds[0]

        const itemCategory = category.map((category_id: number) =>{
        return {
            category_id, item_id
            }
        })
        await trx('items_category').insert(itemCategory)
        await trx.commit()
        return response.json({id: item_id, ... item})
    }

    async index(request: Request, response: Response){
        const items = await knex('items').select('*') // SELECT * FROM items
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                amount: item.amount,
                price: item.price,
                image_url: `https://localhost:3000/uploads/${item.image}`
            }
        })
        return response.json(serializedItems)
    }

    async show(request: Request, response: Response){
        const id = request.params.id

        const trx = await knex.transaction()

        const item = await trx('items').where('id', id).first()
        const category = await trx('items_category').where({item_id: id}).select("category_id")
        if (!item){
            return response.status(400).json({message: "Item not found."})
        }
        await trx.commit()
        
        return response.json({... item, category})
        }

    async delete(request: Request, response: Response){
        const id = request.params.id
        
        const trx = await knex.transaction()
        await trx('items').where({id}).del()
        await trx('items_category').where({item_id: id}).del()
        await trx.commit()
        return response.json(`Item ID: ${id} was deleted.`)
    }

    async update(request: Request, response: Response){
        const id = request.params.id
        const {title, amount, price, category} = request.body;
        const item = {title, image: 'fake', amount, price}
        const trx = await knex.transaction()

        await trx('items').where({id}).update(item)
        const itemCategory = category.map((category_id: number) =>{
            return {
                category_id, item_id: id
            }
        })
        await trx('items_category').where({item_id: id}).del()
        await trx('items_category').insert(itemCategory)
        await trx.commit()

        return response.json(`Item ID: ${id} was updated`)
    }
}

export default ItemsControllers