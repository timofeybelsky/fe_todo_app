import express  from 'express';
import { User } from './db/models';

const PORT = process.env.PORT || 5000;
const app = express();
app.use( express.json() );

app.get( '/', (req, res) => res.send( 'Hello World!' ) );

app.post( '/user', async (req, res, next) => {
  try {

    const createdUser = await User.create( req.body );

    return res.send( createdUser );

  } catch (e) {
    next( e );
  }
} );

app.use( (err, req, res) => {

  res.status( 500 ).send( 'Something broke!' );

} );

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );