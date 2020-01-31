/**
 *
 * @param {EntityType} entity
 * @return {function(action:ActionType): function(...[*]=)}
 */
export default (entity) => {
  return (action) => {
    return (req, res, next) => {
      try {

      } catch (e) {
        next( e );
      }
    };
  };
}
