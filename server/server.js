import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import imageRouter from './routes/imageRoutes.js';
import { connectDb } from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';





const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json())
app.use(cors());
await connectDb();


app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);
app.get( '/' , (req, res)=>{
  return   res.send(
    "This is home route" )
} )



app.listen( PORT, ()=>{
    console.log(`Server is listining on port ${PORT}`);
} )