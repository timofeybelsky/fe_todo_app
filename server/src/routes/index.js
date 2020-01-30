import express                from 'express';
import AppErrors              from '../utils/applicationErrors';
import userRouter             from './user.router.js';
import checkUserAuthorization from '../middlewares/authorization/checkUserAuthorization.js';

const router = express.Router();

router.use( checkUserAuthorization );

router.use( '/user', userRouter );

router.use( '/*', function (req, res, next) {
  next( new AppErrors.NotFoundError() );
} );

export default router;