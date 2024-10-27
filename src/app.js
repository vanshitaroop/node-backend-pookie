import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();
app.get("/",(req,res)=>{
    res.send("I am listening")
})
app.listen(PORT,()=>{
    console.log(`server running on the port this ${PORT}`)
})
