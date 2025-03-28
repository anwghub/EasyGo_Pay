import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


dotenv.config();



const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cookieParser());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/wallets", walletRoutes);
app.use("/api/admins", adminRoutes);



app.listen(PORT,()=>{ 
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})