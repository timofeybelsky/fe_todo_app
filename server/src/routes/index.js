import express      from 'express';
import userRouter   from './user.js';
import errorHandler from '../middlewares/errorHandler.js';

const router = express.Router();

router.use( '/user', userRouter );

router.use( errorHandler );

export default router;