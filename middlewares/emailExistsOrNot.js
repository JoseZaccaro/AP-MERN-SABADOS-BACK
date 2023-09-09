import User from "../models/User.js"

const emailExistsOrNot = (boolean) => async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!!user == boolean) {
            if (boolean) {
                req.body.passwordToCompare = user.password
            }
            return next()
        }
        const message = boolean ? "Invalid credentials" : "Email already in use, please log in"
        throw new Error(message)
    } catch (error) {
        res.status(401).json({
            status: 401,
            message: error.message,
            response: null
        })
    }
}
export default emailExistsOrNot