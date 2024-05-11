const express=require("express");
const cors=require("cors");
const connectDB = require ("./Config/connexion")
const app=express();

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

// connect database 
connectDB ()


// middelware
app.use(express.json())
app.use('/api/contacts', require('./Routes/contact'))


const  port = 5000
app.listen(port,()=>console.log('server running'));

