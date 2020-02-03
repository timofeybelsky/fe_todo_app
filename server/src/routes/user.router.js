import express                                                     from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUserByPk } from '../controllers/user.controller.js';
import createValidationMW
                                                                   from '../middlewares/validation/createValidationMW.js';
import schemas                                                     from '../utils/validation';
import createPermissionMW
                                                                   from '../middlewares/permission/createPermissionMW.js';
import { ACTION, ENTITY }                                          from '../constants';

const userRouter = express.Router();

const createUserPermissionMW = createPermissionMW( ENTITY.USER );
const createUserValidationMW = createValidationMW( schemas.userSchema );

userRouter.post( '/',
                 createUserPermissionMW( ACTION.CREATE ),
                 createUserValidationMW( ACTION.CREATE ),
                 createUser
);
userRouter.patch( '/:userId',
                  createUserPermissionMW( ACTION.UPDATE ),
                  createUserValidationMW( ACTION.UPDATE ),
                  updateUserByPk
);
userRouter.get( '/:userId',
                createUserPermissionMW( ACTION.READ ),
                getUserByPk
);

userRouter.delete( '/:userId',
                   createUserPermissionMW( ACTION.DELETE ),
                   deleteUserByPk
);

export default userRouter;