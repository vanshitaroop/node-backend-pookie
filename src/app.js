import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("I am listening");
});

app.get('/health', (req, res) => res.status(200).send('OK'));

export default app;
