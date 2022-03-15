import 'express-async-errors';
import express from 'express';

const app = express();
app.set('port', process.env.APP_PORT);
app.set(express.json());

export default app;
