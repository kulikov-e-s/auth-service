import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

export default app;
