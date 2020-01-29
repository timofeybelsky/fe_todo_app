import express                                                     from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUserByPk } from '../controllers/user.controller.js';
import { validateUserOnCreate, validateUserOnUpdate }              from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post( '/',
                 validateUserOnCreate,
                 createUser
);
userRouter.patch( '/:userId', validateUserOnUpdate,
                  updateUserByPk
);
userRouter.get( '/', getUserByPk );
userRouter.delete( '/', deleteUserByPk );

export default userRouter;