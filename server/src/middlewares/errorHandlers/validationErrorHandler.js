import { ValidationError } from '@hapi/joi';

export default function (err, req, res, next) {
  if (err instanceof ValidationError) {
    const { details: [errorObj] } = err;

    let errorMessage = '';

    switch (errorObj.type) {
      case 'string.pattern.base':
        errorMessage = `\"${errorObj.context.label}\" with value \"${errorObj.context.value}\" fails to match the required pattern`;
        break;
      default:
        errorMessage = errorObj.message;
        break;
    }

    return res.status( 400 ).send( errorMessage );
  } else {
    next( err );
  }
}