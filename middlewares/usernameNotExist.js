import { User } from "../models/User.js";

export const usernameNotExist = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            throw new Error("Username already in use")
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            status: 401,
            message: error.message,
        });
    }
};  