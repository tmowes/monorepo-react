import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello JULIUS' })
})

routes.post('/posts', (request, response) => {
  return response.json({ message: 'New post' })
})

export default routes
