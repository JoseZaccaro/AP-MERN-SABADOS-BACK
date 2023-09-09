import bcryptjs from 'bcryptjs'

const hashPassword = async (req, res, next) => {
    const hash = bcryptjs.hashSync(req.body.password)
    req.body.password = hash
    next()
}

const comparePassword = async (req, res, next) => {
    const { passwordToCompare, password } = req.body
    const equals = bcryptjs.compareSync(password, passwordToCompare)
    
    if (equals) {
        return next()
    }

    res.status(401).json({
        status: 401,
        message: "Invalid credentials",
        response: null
    })
}

export { hashPassword, comparePassword }