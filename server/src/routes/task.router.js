import express            from 'express';
import createValidationMW from '../middlewares/validation/createValidationMW.js';
import schemas            from '../utils/validation';
import TaskController     from '../controllers/task.controller.js';
import checkPermissions   from '../middlewares/permission/checkPermissions.js';
import { ACTION, ENTITY } from '../constants';

const taskRouter = express.Router();

const checkTaskPermissions = checkPermissions( ENTITY.TASK );

taskRouter.post( '/',
                 checkTaskPermissions( ACTION.CREATE ),
                 createValidationMW( schemas.taskSchema )(),
                 TaskController.createTask,
);
taskRouter.get( '/:taskId',
                checkTaskPermissions( ACTION.READ ),
                TaskController.getTask
);
taskRouter.patch( '/:taskId',
                  checkTaskPermissions( ACTION.UPDATE ),
                  createValidationMW( schemas.taskSchema )( false ),
                  TaskController.updateTask
);
taskRouter.delete( '/:taskId',
                   checkTaskPermissions( ACTION.DELETE ),
                   TaskController.deleteTask
);

export default taskRouter;