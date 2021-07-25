import 'reflect-metadata';

import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';
import handleErrors from './middleware/handleErrors';

dotenv.config();

import routes from './routes';
import './database/connection';

import '@shared/container';

console.log('');
console.log('====================================================');

const port = process.env.APP_PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
    console.log('====================================================');
    console.log('');
});
