import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import db from "./utilis/db.js";
import userRouter from './Route/UserRouter.js'
dotenv.config();
const port= 5000 || process.env.PORT;
db();

const app= express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/user',userRouter)

app.get('/',(req,res)=>res.send('server is ready',port))
app.listen(port,()=>console.log('server is ready',port))