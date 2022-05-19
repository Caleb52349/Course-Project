const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan")
const app = express();
require ('dotenv').config();
const authRoutes =require('./routes/auth')

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send("Inside Server")
})
//database 
mongoose.connect(process.env.MONGO_URI,)


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Listening on port ${port}...`));