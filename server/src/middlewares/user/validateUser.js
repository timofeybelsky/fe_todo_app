import userSchema from '../../utils/validation/user.js';

export default async function validateUser (req, res, next) {
  try {

    req.body = await userSchema.validateAsync( req.body, {
      context: {
        isCreateMode: true,
      }
    } );

    next();
  } catch (e) {

    next( e );
  }
}