import express from 'express'
import "dotenv/config"; 
import { dbconnect } from './src/config/db.js';
import authroutes from './src/routes/authroutes.js'
import cors from 'cors'
import chatroute from './src/routes/chatroute.js'
import cookieParser from 'cookie-Parser'
const app = express()
dbconnect()

app.use(cookieParser());
app.listen(3000)
app.use (express.json())

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  })
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

app.use("/api/auth",authroutes)
app.use("/api",chatroute)



app.get("/check",(req,res)=>{
    res.send("hello i am alive")
    console.log(process.env.DATABASE_URL);
})