import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sendEmail from "../services/emailServices.js";
import speakeasy from "speakeasy";
import qrcode from "qrcode";

// Generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// User Registration

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ fullName, email, password: hashedPassword });
    await user.save();

    const token = generateToken(user);
    const verificationLink = `http://localhost:5000/api/auth/verify/${token}`;

    try {
      await sendEmail(
        email,
        "Verify Your Email",
        `Click to verify: ${verificationLink}`,
        `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`
      );
      console.log("Verification email sent successfully to:", email);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      return res.status(500).json({ msg: "Error sending verification email", error: emailError.message });
    }

    res.status(201).json({ msg: "User registered! Please verify your email." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};


// Email Verification
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(400).json({ msg: "Invalid token" });

    user.isVerified = true;
    await user.save();

    res.json({ msg: "Email verified successfully!" });
  } catch (error) {
    res.status(500).json({ msg: "Invalid or expired token" });
  }
};


// User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and if password matches
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(400).json({ msg: "Please verify your email first" });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Optionally clear previous tokens or store the new one
    user.tokens = [{ token }];  // Reset tokens array with new token
    await user.save();

    // Return response with token
    res.json({ msg: "Login successful!", token, user: { fullName: user.fullName, email: user.email } });

  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};


// Logout
export const logout = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.tokens = [];
    await user.save();
    res.json({ msg: "Logged out successfully!" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Forgot Password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "User not found" });

    const token = generateToken(user);
    const resetLink = `http://localhost:5000/api/auth/reset-password/${token}`;

    await sendEmail(email, "Reset Password", `Reset link: ${resetLink}`, `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`);

    res.json({ msg: "Password reset email sent!" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    user.password = newPassword;
    await user.save();

    res.json({ msg: "Password reset successfully!" });
  } catch (error) {
    res.status(500).json({ msg: "Invalid or expired token" });
  }
};

// Enable 2FA
export const enable2FA = async (req, res) => {
  const user = await User.findById(req.user.id);
  const secret = speakeasy.generateSecret({ name: "MERNAuthApp" });

  user.twoFactorSecret = secret.base32;
  user.twoFactorEnabled = true;
  await user.save();

  const qrCodeDataURL = await qrcode.toDataURL(secret.otpauth_url);
  res.json({ qrCodeDataURL, secret: secret.base32 });
};

// Verify 2FA
export const verify2FA = async (req, res) => {
  const { token } = req.body;
  const user = await User.findById(req.user.id);

  const isValid = speakeasy.totp.verify({ secret: user.twoFactorSecret, encoding: "base32", token });

  if (isValid) return res.json({ msg: "2FA Verified!" });
  return res.status(400).json({ msg: "Invalid OTP" });
};
