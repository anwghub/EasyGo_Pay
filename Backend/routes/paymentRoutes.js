import express from "express";
import { processPayment, getPaymentStatus } from "../controllers/paymentController.js";
import authMiddleware from "../middleware/authMiddleware.js";
 

const router = express.Router();

// Route to initiate payment
router.post("/pay", authMiddleware, processPayment);

// Route to check payment status
router.get("/status/:paymentId", authMiddleware, getPaymentStatus);

export default router;

