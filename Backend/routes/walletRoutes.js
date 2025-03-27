import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createWallet, getWallet, addFunds, deductFunds } from "../controllers/walletController.js";

const router = express.Router();

// Route to create a wallet
router.post("/create", authMiddleware, createWallet);

// Route to get wallet details
router.get("/:userId", authMiddleware, getWallet);

// Route to add funds to wallet
router.put("/:userId/add", authMiddleware, addFunds);

// Route to deduct funds from wallet
router.put("/:userId/deduct", authMiddleware, deductFunds);

export default router;
