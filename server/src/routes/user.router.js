import express                                                     from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUserByPk } from '../controllers/user.controller.js';
import createValidationMW
                                                                   from '../middlewares/validation/createValidationMW.js';
import schemas                                                     from '../utils/validation';

const userRouter = express.Router();

userRouter.post( '/',
                 createValidationMW( schemas.userSchema )(),
                 createUser
);
userRouter.patch( '/:userId',
                  createValidationMW( schemas.userSchema )( false ),
                  updateUserByPk
);
userRouter.get( '/:userId', getUserByPk );

userRouter.delete( '/:userId', deleteUserByPk );

export default userRouter;