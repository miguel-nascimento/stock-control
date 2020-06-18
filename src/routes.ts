import express, { response } from 'express'

import ItemsController from './controllers/ItemsController'
import CategoriesController from './controllers/CategoriesController'

const itemsController = new ItemsController()
const categoriesController = new CategoriesController()


const routes = express.Router()

routes.get('/', (request, response) =>{
    return response.json({message: "No route specified, but hi user!"})
})


routes.get('/category', categoriesController.index)


//TODO: FIX ME, items are not going to the sqlite3 database
routes.get('/items', itemsController.index)
routes.get('/items/:id', itemsController.show)
routes.post('/items', itemsController.create)
routes.delete('/items/:id', itemsController.delete)
routes.put('/items/:id', itemsController.update)

export default routes