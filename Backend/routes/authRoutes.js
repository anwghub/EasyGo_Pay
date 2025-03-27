import express from "express";
import { register, verifyEmail, login, logout, forgotPassword, resetPassword, enable2FA, verify2FA } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.get("/verify/:token", verifyEmail);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/enable-2fa", authMiddleware, enable2FA);
router.post("/verify-2fa", authMiddleware, verify2FA);

export default router;
