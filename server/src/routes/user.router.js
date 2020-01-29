import express                                        from 'express';
import { createUser }                                 from '../controllers/user.controller.js';
import { validateUserOnCreate, validateUserOnUpdate } from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserOnCreate,
                 createUser
);

export default userRouter;