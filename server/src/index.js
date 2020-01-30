import express      from 'express';
import cors         from 'cors';
import router       from './routes';

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
 * listening port
 * */

app.use( (err, req, res) => {
  res.status( 500 ).send( 'Internal server error!' );
} );
app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );