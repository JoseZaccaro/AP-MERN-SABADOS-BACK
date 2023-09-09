import { User } from "../models/User.js";
export const register = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)

        res.status(201).json({
            status: 201,
            message: "Sign Up successful",
            response: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error"
        });
    }
};


export const signIn = async (req, res, next) => {
    try {
        const userData = await User.findOne({ username: req.body.username })
        res.status(200).json({
            status: 200,
            message: "Sign In successful",
            response: userData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error"
        });
    }
};