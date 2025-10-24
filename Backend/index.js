import express from "express";
import authRoutes from "./routes/auth_routes.js";
import Chat from './routes/Chat_routes.js'
import cors from "cors";
import dbcalling from "./config/db.js";
import "dotenv/config"
const app = express();

 dbcalling();


app.use(cors());
app.use(express.json())

//  login and signup
app.use("/api/auth", authRoutes);

//  datasave and chat route
app.use("/api/auth",Chat)

app.get("/", (req, res) => {
  res.send("Pustak_AI running");
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
