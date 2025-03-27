import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.model.js";

// Admin Registration (Super Admin Only)
export const registerAdmin = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, msg: "Admin already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({ email, password: hashedPassword, role });
    await newAdmin.save();

    res.status(201).json({ success: true, msg: "Admin registered successfully", admin: newAdmin });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, msg: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, msg: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ success: true, msg: "Login successful", token, admin });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// Get Admin Profile
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select("-password");
    if (!admin) {
      return res.status(404).json({ success: false, msg: "Admin not found" });
    }

    res.status(200).json({ success: true, admin });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

// List All Admins (Super Admin Only)
export const listAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");
    res.status(200).json({ success: true, admins });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
