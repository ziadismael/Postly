import User from "../models/user.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js';

export const signup = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, username, password: hashedPassword });

        const token = jwt.sign({userID: newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
        
        req.user = user;
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                user: user,
                token: token,
            },
        });

    } catch (error) {
        next(error);
    }
};

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            const error = new Error("Invalid credentials");    
            error.statusCode = 401;
            throw error;
        }
        
        const token = jwt.sign({userID: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
        req.user = user;
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                user: user,
                token: token,
            },
        });

    } catch (error) {
        next(error);
    }
};

export async function logout(req, res) {
    // For stateless JWT: just tell the client to drop the token
    res.json({ message: "Logout successful. Please delete token on client." });
}