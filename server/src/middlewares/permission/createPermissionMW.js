import appErrors from '../../utils/applicationErrors';

/**
 *
 * @param entity
 * @return {function(*): function(...[*]=)}
 */
export default (entity) => {
  return (action) => {
    return (req, res, next) => {
      try {

        next( new appErrors.ForbiddenError() );
      } catch (e) {
        next( e );
      }
    };
  };
}
