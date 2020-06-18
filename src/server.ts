import express from 'express'
import routes from './routes'
import path from 'path'

const app = express()
app.use(express.json())

// GET: Busca de uma ou mais informações no back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação
// DELETE: Deletar uma informação

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen("3000")
console.log(">> Server started.")