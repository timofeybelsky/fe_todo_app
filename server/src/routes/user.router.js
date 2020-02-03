import express                                                     from 'express';
import { createUser, deleteUserByPk, getUserByPk, updateUserByPk } from '../controllers/user.controller.js';
import createValidationMW
                                                                   from '../middlewares/validation/createValidationMW.js';
import schemas                                                     from '../utils/validation';
import checkPermissions                                            from '../middlewares/permission/checkPermissions.js';
import { ACTION, ENTITY }                                          from '../constants';

const userRouter = express.Router();

const checkUserPermissions = checkPermissions( ENTITY.USER );

userRouter.post( '/',
                 checkUserPermissions( ACTION.CREATE ),
                 createValidationMW( schemas.userSchema )( ACTION.CREATE ),
                 createUser
);
userRouter.patch( '/:userId',
                  checkUserPermissions( ACTION.UPDATE ),
                  createValidationMW( schemas.userSchema )( ACTION.UPDATE ),
                  updateUserByPk
);
userRouter.get( '/:userId',
                checkUserPermissions( ACTION.READ ),
                getUserByPk
);

userRouter.delete( '/:userId',
                   checkUserPermissions( ACTION.DELETE ),
                   deleteUserByPk
);

export default userRouter;