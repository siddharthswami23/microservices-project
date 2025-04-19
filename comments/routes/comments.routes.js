const express = require('express')
const { addComment, getCommentsBySnippetId } = require('../controllers/comments.controller')
const CommentRouter = express.Router()

CommentRouter.post('/add', addComment)
CommentRouter.get('/get/:snippetId', getCommentsBySnippetId)

module.exports = CommentRouter