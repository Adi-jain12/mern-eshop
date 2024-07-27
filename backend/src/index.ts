import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';

import productRoutes from './routes/productRoutes';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);

app.use('/api/v1/products', productRoutes);

// app.get('/test', async (req, res) => {
// 	res.send({ message: 'Test' });
// });

app.listen(7000, () => {
	console.log('Server is running on localhost:7000');
});
