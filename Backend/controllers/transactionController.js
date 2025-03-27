import Transaction from "../models/Transaction.model.js";
import Wallet from "../models/Wallet.model.js";

// Create a new transaction
export const createTransaction = async (req, res) => {
  try {
    const { walletId, amount, type, transactionMethod } = req.body;

    // Check if wallet exists
    const wallet = await Wallet.findById(walletId);
    if (!wallet) return res.status(404).json({ success: false, msg: "Wallet not found" });

    // Ensure sufficient balance for debit transactions
    if (type === "debit" && wallet.balance < amount) {
      return res.status(400).json({ success: false, msg: "Insufficient balance" });
    }

    // Create transaction
    const transaction = new Transaction({
      walletId,
      amount,
      type,
      transactionMethod,
      status: "pending",
    });

    await transaction.save();

    // Update wallet balance based on transaction type
    if (type === "credit") {
      wallet.balance += amount;
    } else {
      wallet.balance -= amount;
    }

    await wallet.save();

    transaction.status = "completed";
    await transaction.save();

    res.status(201).json({ success: true, transaction });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Get transaction by ID
export const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const transaction = await Transaction.findById(transactionId).populate("walletId");

    if (!transaction) return res.status(404).json({ success: false, msg: "Transaction not found" });

    res.status(200).json({ success: true, transaction });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Get all transactions for a wallet
export const getWalletTransactions = async (req, res) => {
  try {
    const { walletId } = req.params;
    const transactions = await Transaction.find({ walletId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, transactions });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
