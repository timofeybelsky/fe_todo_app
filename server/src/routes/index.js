import express                from 'express';
import AppErrors              from '../utils/applicationErrors';
import userRouter         from './user.router.js';
import checkAuthorization from '../middlewares/authorization/checkAuthorization.js';
import taskRouter         from './task.router.js';

const router = express.Router();

router.use( checkAuthorization );

router.use( '/user', userRouter );
router.use( '/task', taskRouter );

router.use( '/*', function (req, res, next) {
  next( new AppErrors.NotFoundError() );
} );

export default router;