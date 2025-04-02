import express from "express";
import { processPayment, verifyPayment } from "../controllers/paymentController.js";
import authMiddleware from "../middleware/authMiddleware.js";
 

const router = express.Router();

// Route to initiate payment
router.post("/pay", authMiddleware, processPayment);

// Route to check payment status
router.get("/status/:paymentId", authMiddleware, verifyPayment);

export default router;

