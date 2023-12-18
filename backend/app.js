const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes.js');

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    allowedHeaders:'Content-Type'
}));
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/uploads',express.static(__dirname + '/controller/uploads'))



app.use('/api' , router);


module.exports = app;
