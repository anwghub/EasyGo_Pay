import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { registerAdmin, loginAdmin, getAdminProfile, listAdmins } from "../controllers/adminController.js";

const router = express.Router();

// Route to register a new admin (Only superadmin should be able to do this)
router.post("/register", authMiddleware, registerAdmin);

// Route to login as an admin
router.post("/login", loginAdmin);

// Route to get the logged-in admin's profile
router.get("/profile", authMiddleware, getAdminProfile);

// Route to list all admins (Superadmin access only)
router.get("/all", authMiddleware, listAdmins);

export default router;
