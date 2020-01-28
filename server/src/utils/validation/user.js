import Joi from '@hapi/joi';
import { LOGIN_PATTERN, PASSWORD_PATTERN } from '../../constants';

const nameSchema = Joi.string()
                      .pattern(/^[A-Z][a-z]{0,63}/)
                      .required();

const userSchema = Joi.object({
                                firstName: nameSchema,
                                lastName: nameSchema,
                                email: Joi.string().email(),
                                login: Joi.string()
                                          .pattern(LOGIN_PATTERN)
                                          .required(),
                                password: Joi.string()
                                             .pattern(PASSWORD_PATTERN)
                                             .required(),
                              });