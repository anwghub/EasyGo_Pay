import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createTransaction,
  getTransactionById,
  getWalletTransactions,
} from "../controllers/transactionController.js";

const router = express.Router();

// Route to create a transaction (credit/debit)
router.post("/create", authMiddleware, createTransaction);

// Route to get a transaction by ID
router.get("/:transactionId", authMiddleware, getTransactionById);

// Route to get all transactions for a specific wallet
router.get("/wallet/:walletId", authMiddleware, getWalletTransactions);

export default router;
