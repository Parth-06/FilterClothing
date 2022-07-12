const mongoose = require ('mongoose');
// var session = require('express-session');
const dotenv = require ('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: "./config.env"})
require("./DB/conn")

app.use(express.json());

app.use(require('./router/auth'))

if(process.env.NODE_ENV === "production"){
    app.use(express.static('Frontend/build'))
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`listning At ${PORT}`)
})