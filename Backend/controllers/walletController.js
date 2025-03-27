import Wallet from "../models/Wallet.model.js";

// Create a wallet for a user
export const createWallet = async (req, res) => {
  try {
    const { userId } = req.body;

    // Check if wallet already exists for the user
    const existingWallet = await Wallet.findOne({ userId });
    if (existingWallet) {
      return res.status(400).json({ success: false, msg: "Wallet already exists for this user" });
    }

    // Create a new wallet
    const wallet = new Wallet({ userId });
    await wallet.save();

    res.status(201).json({ success: true, wallet });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Get wallet details for a user
export const getWallet = async (req, res) => {
  try {
    const { userId } = req.params;
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ success: false, msg: "Wallet not found" });
    }

    res.status(200).json({ success: true, wallet });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Add funds to wallet
export const addFunds = async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount } = req.body;

    if (amount <= 0) {
      return res.status(400).json({ success: false, msg: "Amount should be greater than zero" });
    }

    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).json({ success: false, msg: "Wallet not found" });
    }

    wallet.balance += amount;
    await wallet.save();

    res.status(200).json({ success: true, msg: "Funds added successfully", wallet });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Deduct funds from wallet
export const deductFunds = async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount } = req.body;

    if (amount <= 0) {
      return res.status(400).json({ success: false, msg: "Amount should be greater than zero" });
    }

    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).json({ success: false, msg: "Wallet not found" });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ success: false, msg: "Insufficient balance" });
    }

    wallet.balance -= amount;
    await wallet.save();

    res.status(200).json({ success: true, msg: "Funds deducted successfully", wallet });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
