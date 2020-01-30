import express       from 'express';
import cors          from 'cors';
import router        from './routes';
import errorHandlers from './middlewares/errorHandlers';

/*
 * define server port
 * */
const PORT = process.env.PORT || 5000;

/*
 * create server app instance
 * */
const app = express();

/*
 * enable cross origin resources
 * */
app.use( cors() );

/*
 * enable "Content-type: application/json" header
 * */
app.use( express.json() );

/*
 * enable routing
 * */
app.use( router );

/*
 * error handling
 * */
app.use( errorHandlers.applicationErrorHandler );
app.use( errorHandlers.validationErrorHandler );
app.use( (err, req, res) => {
  res.status( 500 ).send( 'Internal server error!' );
} );

/*
 * listening port
 * */
app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );