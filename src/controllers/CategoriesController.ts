import knex from '../database/connection'
import {Request, Response} from 'express'

class CategoriesController {
    async index(request: Request, response: Response){
        const category = await knex('category').select('*') // SELECT * FROM category
        return response.json(category)
    }
}

export default CategoriesController
