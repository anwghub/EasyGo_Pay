import mongoose from "mongoose";    

const paymentSchema = new mongoose.Schema({
    
    senderWalletId: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet", required: true },
    receiverWalletId: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" }, 
    paymentMethod: { type: String, enum: ["UPI", "Bank Transfer", "Card", "Wallet"], required: true },
    createdAt: { type: Date, default: Date.now }

});

export default mongoose.model("Payment", paymentSchema);  // Exporting the model to use it in the controller