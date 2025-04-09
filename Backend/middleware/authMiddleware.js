import cors from "cors";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

// Define CORS options or use defaults
const corsMiddleware = cors();

const authMiddleware = async (req, res, next) => {
  try {
    // Apply CORS middleware for handling preflight requests
    corsMiddleware(req, res, async () => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ msg: "Unauthorized" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);

      next();
    });
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default authMiddleware;