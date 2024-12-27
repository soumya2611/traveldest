import express from 'express'
import userRegister from '../controllers/userController.js';
import upload from '../middlewares/multer.js';
const userRouter = express.Router();

userRouter.post('/register',upload.none(),userRegister)

export default userRouter