const express = require('express')
const cors = require('cors')
const router = require('./routes/routes.js')

const app = express()

app.use(express.json())

app.use(cors())
app.get('/', (req, res) => {
    res.send('hiiii')
})

app.use('/api' , router)

module.exports = app
