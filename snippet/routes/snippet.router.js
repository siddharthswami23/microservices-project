const express = require('express')
const { CreateSnippet, getAllSnippets } = require('../controllers/snippet.controller')
const SnipperRouter = express.Router()

SnipperRouter.post('/create', CreateSnippet)
SnipperRouter.get('/getAll', getAllSnippets)

module.exports = SnipperRouter