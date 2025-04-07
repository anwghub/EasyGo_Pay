import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // Logging the MongoDB URI (ensure it doesn't contain sensitive information in production)
        console.log("Connecting to MongoDB...");

        // Check if MONGO_URI is set in environment variables
        if (!process.env.MONGO_URI) {
            console.error("MongoDB URI not found in environment variables!");
            process.exit(1);  // Exit process if no connection URI is found
        }

        // Establish the MongoDB connection with appropriate options
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,     // Use the new URL parser
            useUnifiedTopology: true, // Ensure we use the unified topology engine
            
            
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Improved error handling with more context
        console.error("Error connecting to MongoDB:", error.message);

        // Gracefully terminate the process if a connection error occurs
        process.exit(1);
    }
};

