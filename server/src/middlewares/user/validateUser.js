import { createUserSchema, updateUserSchema } from '../../utils/validation/user.js';

export default async function validateUser (req, res, next) {
  try {

    req.body = await (req.method.toUpperCase() === 'POST'
                      ? createUserSchema
                      : updateUserSchema).validateAsync( req.body );

    next();
  } catch (e) {

    next( e );
  }
}