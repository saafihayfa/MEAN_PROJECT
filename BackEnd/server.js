const express=require("express");
const connectDB = require ("./Config/connexion")
const app=express();

// connect database 
connectDB ()

// middelware
app.use(express.json())
app.use('/api/contacts', require('./Routes/contact'))


const  port = 5000
app.listen(port,()=>console.log('server running'));

