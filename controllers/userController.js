import User from "../models/User.js"


const userController = {

    signUp: async (req, res, next) => {
        console.log(req.body);
        try {
            const newUser = new User(req.body)
            newUser.is_online = true
            await newUser.save()
            delete newUser.__v
            delete newUser.updatedAt
            delete newUser.createdAt
            delete newUser.password
            res.status(201).json({
                status: 201,
                message: "Sign up successful",
                response: newUser
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "internal server error",
                response: null
            })
        }
    },
    signIn: async (req, res, next) => {
        console.log(req.body);
        try {
            const userCredentials = await User.findOne({ email: req.body.email }, "-__v -createdAt -updatedAt -password")
            userCredentials.is_online = true
            userCredentials.full_name = "Jose Zaccaro"
            await userCredentials.save()
            delete userCredentials.updatedAt
            res.status(200).json({
                status: 200,
                message: "Sign in successful",
                response: userCredentials
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "internal server error",
                // response: newUser
            })

        }
    },
    signOut: async (req, res, next) => {
        try {
            const userCredentials = await User.findOne({ email: req.body.email })
            userCredentials.is_online = false
            await userCredentials.save()
            res.status(200).json({
                status: 200,
                message: "Sign out successful",
            })
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "internal server error",
                // response: newUser
            })

        }
    },
    authenticate: async (req, res, next) => {

    },


}


export default userController