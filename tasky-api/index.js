import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import tasksRouter from './api/tasks';
import { connectDB } from './db';

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(express.json());
app.use('/api/tasks', tasksRouter);

connectDB();

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});