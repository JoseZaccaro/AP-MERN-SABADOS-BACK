import { Router } from 'express';
import userController from '../controllers/userController.js';
import signupSchema from '../joi_schemas/sign_up.js';
import validator from '../middlewares/validator.js';
import emailExistsOrNot from '../middlewares/emailExistsOrNot.js';
import { hashPassword, comparePassword } from '../middlewares/hashPassword.js';
const userRouter = Router()


userRouter.post('/signin', emailExistsOrNot(true), comparePassword, userController.signIn)
userRouter.post("/signup", validator(signupSchema), emailExistsOrNot(false), hashPassword, userController.signUp)
userRouter.post("/signout", emailExistsOrNot(true), userController.signOut)
userRouter.post("/authenticate", userController.authenticate)

export default userRouter