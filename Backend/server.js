import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use(express.json());

app.listen(PORT,()=>{ 
    console.log(`Server is running on port ${PORT}`);
})