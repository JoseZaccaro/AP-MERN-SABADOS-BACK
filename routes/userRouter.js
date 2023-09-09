import { Router } from 'express';
import { register, signIn } from '../controller/userController.js';
import validator from './../middlewares/validator.js';
import registerSchema from '../joi_schemas/registerSchema.js';
import { usernameNotExist } from '../middlewares/usernameNotExist.js';
import { usernameExist } from '../middlewares/usernameExist.js';
import { hashPass, comparePass } from '../middlewares/hashPass.js';

const userRouter = Router()

userRouter.post("/register", validator(registerSchema), usernameNotExist, hashPass, register)
userRouter.post("/signin", usernameExist, comparePass, signIn)

export default userRouter