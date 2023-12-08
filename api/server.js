const express = require('express')

const recipes_router = require('../api/recipes-book-router')

const server = express()

server.use(express.json())
server.use('/api/recipes', recipes_router)

module.exports = server