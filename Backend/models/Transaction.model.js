import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  walletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true }, // credit for adding money, debit for spending
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  transactionMethod: { type: String, enum: ['UPI', 'Bank Transfer', 'Card', 'Wallet'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
