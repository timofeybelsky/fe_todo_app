export const NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
export const LOGIN_PATTERN = /^(?!.*?[ \\/\[\]:;|=,+*?<>]).{6,16}$/;
export const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;

/**
 * @typedef {Symbol} ActionType
 */

/**
 *@readonly
 * @enum {ActionType}
 */
export const ACTION = {
  CREATE: Symbol( 'CREATE' ),
  READ: Symbol( 'READ' ),
  UPDATE: Symbol( 'UPDATE' ),
  DELETE: Symbol( 'DELETE' ),
};

/**
 * @typedef {Symbol} EntityType
 */

/**
 *@readonly
 * @enum {EntityType}
 */
export const ENTITY = {
  USER: Symbol( 'USER' ),
  TASK: Symbol( 'TASK' ),
};

/**
 * @typedef {string} RoleType
 */

/**
 *@readonly
 * @enum {RoleType}
 */
export const ROLE = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
};
