import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import userModel from "../models/user.js";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
    try {
        const { name, email, img, password } = req.body

        const userExists = await userModel.findOne({ email })
        if (userExists) {
            res.status(500).json("User already Exists")
        }
        else {
            const user = await userModel.create({
                name, email, img, password
            })
            res.status(201).json(user)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const createToken = (userId) => {
    // Set the token payload
    const payload = {
        userId: userId,
    };

    // Generate the token with a secret key and expiration time
    const token = jwt.sign(payload, "Q$r2K6W8n!jCW%Zk", { expiresIn: "5h" });

    return token;
};
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        await userModel.findOne({ email })
            .then((user) => {
                if (!user) {
                    //user not found
                    return res.status(404).json({ message: "User not found" });
                }

                //compare the provided passwords with the password in the database
                if (user.password !== password) {
                    return res.status(404).json({ message: "Invalid Password!" });
                }

                const token = createToken(user._id);
                res.status(200).json({ token });
            })
            .catch((error) => {
                console.log("error in finding the user", error);
                res.status(500).json({ message: "Internal server Error!" });
            });

    } catch (error) {
        res.status(500).json(error)
    }
}

export const loginUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAuthorDetails = async (req, res) => {
    try {
        const { id } = req.params
        const author = await userModel.findById(id)
        res.status(200).json(author)
    } catch (error) {
        res.status(500).json(error)
    }
}