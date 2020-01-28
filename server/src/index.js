import express from 'express';
import router from './routes';

const PORT = process.env.PORT;
const app = express();
app.use( express.json() );
app.use( router );

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));