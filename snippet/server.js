const express = require('express');
const SnipperRouter = require('./routes/snippet.router');
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

const PORT = 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api/snippet', SnipperRouter)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})