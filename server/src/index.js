import { User, Task } from './db/models';

async function getUsersWithTasks () {
  try {
    const result = User.findAll( {

                                   attributes: {
                                     exclude: ['password']
                                   },
                                   include: [
                                     {
                                       model: Task
                                     }
                                   ]
                                 } );

    return result.map( item => item.get() );
  } catch (e) {

  }
}

getUsersWithTasks()
  .then( console.log );
