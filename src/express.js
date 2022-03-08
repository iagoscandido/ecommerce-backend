import 'express-async-errors';
import express from 'express';

const app = express();
app.set('port', 8080);
app.set(express.json());

export default app;
