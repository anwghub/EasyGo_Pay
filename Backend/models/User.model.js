import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },  
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }

});

export default mongoose.model("User", userSchema);