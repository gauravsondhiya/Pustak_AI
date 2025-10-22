import express from "express";
import authRoutes from "./routes/auth_routes.js";
import cors from "cors";
import dbcalling from "./config/db.js";
import Chat from './routes/Chat_routes.js'
import Data_routes from './routes/Data_routes.js'
import "dotenv/config"
const app = express();

dbcalling();

app.use(cors());
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/auth",Chat)
app.use("/api/auth",Data_routes)

app.post('/values',(req,res)=>{
  let data = req.body

  console.log(data)
  res.send(data)
})

app.get("/", (req, res) => {
  res.send("Pustak_AI running");
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
