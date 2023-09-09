import Joi from "joi";
import JoiPwd from "joi-password-complexity";

const signupSchema = Joi.object({
    full_name: Joi.string().required().min(2).max(25),
    email: Joi.string().required().email(),
    password: JoiPwd({
        min: 4,
        max: 26,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 0,
        requirementCount: 2
    }
    ).required(),
    photo: Joi.string().uri(),
    is_online: Joi.boolean(),
})

export default signupSchema