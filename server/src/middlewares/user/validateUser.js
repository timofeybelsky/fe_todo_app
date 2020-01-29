import userSchema from '../../utils/validation/user.js';

function createUserValidationMW (isCreateMode = true) {

  return async (req, res, next) => {
    try {
      req.body = await userSchema.validateAsync( req.body, {
        context: {
          isCreateMode,
        }
      } );
      next();
    } catch (e) {
      next( e );
    }
  };

}

export const validateUserOnCreate = createUserValidationMW();
export const validateUserOnUpdate = createUserValidationMW( false );

