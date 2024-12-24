import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import routes from './src/routes/index.js';
const app = express();
const PORT = process.env.PORT || 5000;

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
app.use('/api', routes);
app.get('/health', (req, res) => res.status(200).send('OK'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
