import { User } from './../db/models';

export async function createUser (req, res, next) {
  try {
    const createdUser = await User.create( req.body );

    if (createdUser) {
      const userData = createdUser.get();
      delete userData.password;
      return res.status( 201 ).send( userData );
    }

    next( new Error() );

  } catch (e) {

    next( e );
  }
}

export async function updateUserByPk (req, res, next) {
  try {

  } catch (e) {
    next( e );
  }

}