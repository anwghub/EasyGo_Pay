import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js"; 

dotenv.config();

// Middleware to verify JWT token

const authMiddleware = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
      }
  
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password"); // Attach user details to request
  
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
  
      next(); // Proceed to the next middleware/route
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };

  
export { authMiddleware };