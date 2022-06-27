import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/product.js';

const app = express();
dotenv.config();

app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors());

app.use(productRoutes);

export default app;