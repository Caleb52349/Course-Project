const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const app = express();
require ('dotenv').config();
const authRoutes =require('./routes/auth')
const connectDB = require('./database/db')

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send("Inside Server")
})
//database 
connectDB()


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Listening on port ${port}...`));