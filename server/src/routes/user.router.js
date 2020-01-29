import express from 'express';
import { createUser, updateUserByPk, getUserByPk, deleteUserByPk} from '../controllers/user.controller.js';
import {
  validateUserOnCreate,
  validateUserOnUpdate
} from '../middlewares/user/validateUser.js';

const userRouter = express.Router();

userRouter.post('/',
                validateUserOnCreate,
                createUser
);

userRouter.patch('/:userId',
                 validateUserOnUpdate,
                 updateUserByPk
);

userRouter.get('/:userId', getUserByPk);

userRouter.delete('/:userId', deleteUserByPk);

export default userRouter;