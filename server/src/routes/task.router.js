import express            from 'express';
import createValidationMW from '../middlewares/validation/createValidationMW.js';
import schemas            from '../utils/validation';
import TaskController     from '../controllers/task.controller.js';
import createPermissionMW from '../middlewares/permission/createPermissionMW.js';
import { ACTION, ENTITY } from '../constants';

const taskRouter = express.Router();

const createTaskPermissionMW = createPermissionMW( ENTITY.TASK );

taskRouter.post( '/',
                 createTaskPermissionMW( ACTION.CREATE ),
                 createValidationMW( schemas.taskSchema )(),
                 TaskController.createTask,
);
taskRouter.get( '/:taskId',
                createTaskPermissionMW( ACTION.READ ),
                TaskController.getTask
);
taskRouter.patch( '/:taskId',
                  createTaskPermissionMW( ACTION.UPDATE ),
                  createValidationMW( schemas.taskSchema )( ACTION.UPDATE ),
                  TaskController.updateTask
);
taskRouter.delete( '/:taskId',
                   createTaskPermissionMW( ACTION.DELETE ),
                   TaskController.deleteTask
);

export default taskRouter;