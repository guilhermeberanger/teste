const express = require('express');
const app = express();
const mongoose = require('mongoose'); //LAYOUT PARA POST
const bodyParser = require('body-parser'); //FORMATAÇÃO DO POSTMAN
require('dotenv/config')//CONEXÃO COM O BANCO


//IMPORT ROUTES

app.use(bodyParser.json())
const postsRouter = require('./Routes/post');

app.use('/post', postsRouter);

//ROUTES

app.get('/', (req, res) =>{
    res.send('Teste 1 - Roots')
});


//BANCO

mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true }, () =>
console.log('conectado') 
);

//PORTA 
app.listen(4000);