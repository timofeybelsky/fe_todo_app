/**
 *
 * @param {Joi} schema
 * @return {function(*=): function(...[*]=)}
 */
export default function createValidationMW (schema) {
  return (isCreateMode = true) => {
    return async (req, res, next) => {
      try {
        req.body = await schema.validateAsync( req.body, {
          context: {
            isCreateMode,
          }
        } );
        next();
      } catch (e) {
        next( e );
      }
    };
  };
}
