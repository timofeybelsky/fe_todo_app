import express             from 'express';
import createValidationMW  from '../middlewares/validation/createValidationMW.js';
import schemas             from '../utils/validation';
import * as TaskController from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.post( '/',
                 createValidationMW( schemas.taskSchema )(),
                 TaskController.createTask
);
taskRouter.get( '/:taskId',
                TaskController.getTask
);
taskRouter.patch( '/:taskId',
                  createValidationMW( schemas.taskSchema )( false ),
                  TaskController.updateTask
);
taskRouter.delete( '/:taskId',
                   TaskController.deleteTask
);

export default taskRouter;