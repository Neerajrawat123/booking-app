const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const router = require('./routes.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use('/uploads',express.static(__dirname + '/controller/uploads'))

app.use(cors())
app.get('/', (req, res) => {
    res.send('hiiii')
})


// app.post('/api/places',express.json(), async (req, res) =>{
//     console.log(req.body)
// })


app.use('/api' , router)

module.exports = app
