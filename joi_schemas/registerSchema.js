import joi from 'joi';
import joiPwd from 'joi-password-complexity';
const complexityOptions = {
    min: 4,
    max: 26,
    lowerCase: 2,
    upperCase: 0,
    numeric: 2,
    symbol: 0,
    requirementCount: 2,
}

const registerSchema = joi.object({
    username: joi.string().required().max(15).messages({
        "string.empty":"username is not allowed to be empty"
    }),
    password: joiPwd(complexityOptions).required(),
    name: joi.string(),
    lastName: joi.string()
})

export default registerSchema