import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

const roleMiddleware = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }
      next();
    };
  };

export {roleMiddleware};

// Middleware to restrict access based on user role