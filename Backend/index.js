import express from 'express'
import "dotenv/config"; 
import { dbconnect } from './src/config/Neon_db.js';
import authroutes from './src/routes/authroutes.js'
import cors from 'cors'
import chatroute from './src/routes/chatroute.js'
import cookieParser from "cookie-parser";
const app = express()
dbconnect()

app.use(cookieParser());
const PORT = process.env.PORT || 3000;
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(express.json())

app.use(
  cors({
    origin:allowedOrigins,
    credentials: true
  })
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authroutes)
app.use("/api",chatroute)



app.get("/",(req,res)=>{
    res.send("hello i am alive")
})