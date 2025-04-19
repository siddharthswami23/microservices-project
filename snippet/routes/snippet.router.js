const express = require('express')
const { CreateSnippet, getAllSnippets, getSnippetById } = require('../controllers/snippet.controller')
const SnippetRouter = express.Router()

SnippetRouter.post('/create', CreateSnippet)
SnippetRouter.get('/getAll', getAllSnippets)
SnippetRouter.get('/get/:id', getSnippetById)

module.exports = SnippetRouter