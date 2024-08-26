import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import planRouter from './express-routes/plan-route.js'
import authRouter from './express-routes/auth-route.js'
import userRouter from './express-routes/user-route.js'
dotenv.config(); 
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Allow credentials to be included
}));

app.use('/api/auth',authRouter)
app.use('/api/subscriptions',planRouter)
app.use('/api/users',userRouter)

const port = process.env.PORT
// ERROR HANDLER
app.use(
    (err, req, res, next) => {
        const errorStatus = err.status || 500
        const errorMsg = err.message || 'Something Went Wrong'
        return res.status(500).json({
            success: false,
            status: errorStatus,
            message: errorMsg,
            stack: err.stack
        })
    }
)
// mongodb+srv://riteshraj10241089:0Bh00uZi2XPTuPpB@cluster0.rf2gy3r.mongodb.net/plan-manager

const connectionURL = 'mongodb+srv://riteshraj10241089:0Bh00uZi2XPTuPpB@cluster0.rf2gy3r.mongodb.net/plan-manager'
mongoose.connect(connectionURL).then(
    () => {
        console.log('connected to backend')
        app.listen(process.env.PORT, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
).catch(
    (err) => {
        console.log('error occured')
    }
)
