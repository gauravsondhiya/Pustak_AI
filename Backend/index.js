import express from "express";
import authRoutes from "./routes/auth_routes.js";
import cors from "cors";
import dbcalling from "./config/db.js";
import Chat from './routes/Chat_routes.js'
import Datasave_routes from './routes/Datasave_routes.js'
import "dotenv/config"
const app = express();

dbcalling();

app.use(cors());
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/auth",Chat)
app.use("/api/auth",Datasave_routes)


app.get("/", (req, res) => {
  res.send("Pustak_AI running");
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
