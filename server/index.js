import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());



const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})


app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)

