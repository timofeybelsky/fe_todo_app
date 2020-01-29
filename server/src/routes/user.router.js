import express                                        from 'express';
import { createUser, updateUserByPk }                 from '../controllers/user.controller.js';
import { validateUserOnCreate, validateUserOnUpdate } from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserOnCreate,
                 createUser
);
userRouter.patch( '/', validateUserOnUpdate,
                  updateUserByPk
);

export default userRouter;