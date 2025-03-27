import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();


const app = express();
const PORT = 5000;

app.use(cookieParser());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/api/auth",require("./routes/authRoutes.js"));

app.use(express.json());

app.listen(PORT,()=>{ 
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})