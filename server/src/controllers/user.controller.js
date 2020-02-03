import { User }  from '../models';
import AppErrors from '../utils/applicationErrors';

export async function createUser (req, res, next) {
  try {
    const createdUser = await User.create( req.body );

    if (createdUser) {
      const userData = createdUser.get();
      delete userData.password;
      return res.status( 201 ).send( userData );
    }

    next( new AppErrors.BadRequestError() );

  } catch (e) {
    next( e );
  }
}

export async function updateUserByPk (req, res, next) {
  try {
    const [updatedRowsCount, updatedRows] = await User.update( req.body, {
      where: {
        id: req.params.userId,
      },
      returning: true,
    } );
    if (updatedRowsCount) {
      const data = updatedRows[0].get();
      delete data.password;
      return res.send( data );
    }
    next( new AppErrors.NotFoundError( 'User' ) );
  } catch (e) {
    next( e );
  }

}

export async function getUserByPk (req, res, next) {
  try {
    const foundUser = await User.findByPk( req.params.userId, {
      attributes: {
        exclude: ['password']
      }
    } );
    if (foundUser) {

      return res.send( foundUser );
    }
    next( new AppErrors.NotFoundError( 'User' ) );
  } catch (e) {
    next( e );
  }

}

export async function deleteUserByPk (req, res, next) {
  try {
    const deletedRowsCount = await User.destroy( {
                                                   where: {
                                                     id: req.params.userId
                                                   }
                                                 } );
    if (deletedRowsCount) {
      return res.send( `${deletedRowsCount}` );
    }
    next( new AppErrors.NotFoundError( 'User' ) );

  } catch (e) {
    next( e );
  }

}
