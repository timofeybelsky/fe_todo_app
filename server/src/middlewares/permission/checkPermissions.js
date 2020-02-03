import appErrors from '../../utils/applicationErrors';

/**
 *
 * @param {EntityType} entity
 * @return {function(action:ActionType): function(...[*]=)}
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
