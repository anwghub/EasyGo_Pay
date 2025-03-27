import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10min" });
};

const registerUser = async(req, res)=>{
    try{
        const {name,email,password, role} = req.body;

            //check if the user already exists
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({ messsage: "User already exists"});
        }

        //Create Hash password
        const hashedPassword = await bcrypt.hash(password,10);

        //create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || "user", //default-->user
        });

        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                password: user.hashedPassword,
                role:user.role,
                token: generateToken(user._id),
            });
        }else{
            res.status(401).json({messsage: "Invalid user data"});
        }

    }catch(error){
        res.status(500).json({messsage: "Server error", error: error.messsage});
    }
};

//User login

const loginUser = async(req, res)=>{
    try{
        const {email, password} = req.body;

        const user = User.findOne({ email });
        if(!user){
            res.status(400).json({messsage: "Invalid email"});
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            res.status(401).json({ messsage: "Invalid password"});
        }

    }catch(error){
        res.status(500).json({messsage: "Server error", error:error.messsage});
    }
};

const logout = (req,res)=>{
    res.json({messsage:"logout successful"});
}

const forgotPassword = async(req,res)=>{
    try{
        
    }catch(error){
        res.status(203).json({messsage:""})
    }
}

const verifyEmail=(req,res)=>{
    try{

    }catch(error){

    }
}

const getUserProfile = async(req,res)=>{
    try{
        const User = await User.findById(req.user._id).select("-password");
        if(user){
            res.json(user);
        }else{
            res.status(404).json({messsage:" User not found" });
        }

    }catch(error){
        res.status(500).json({messsage: "Server error", error:error.messsage});
    }
}

export {registerUser, loginUser, logout, getUserProfile};

