import bcryptjs from 'bcryptjs'

export const hashPass = async (req, res, next) => {
    req.body.password = bcryptjs.hashSync(req.body.password)
    next()
};
export const comparePass = async (req, res, next) => {
    const { password, userPassword } = req.body
    const equals = bcryptjs.compareSync(password, userPassword)
    if (equals) {
        return next()
    }
    return res.status(401).json({
        status: 401,
        message: "invalid credentials",
    });
};