import express from 'express';
import { Request, Response } from 'express';
import { checkAuth } from './middleware/auth';

const app = express();

app.get('/user', checkAuth, (req, res) => {
    res.status(200).json({ message: 'OK' });
});

export default app;
