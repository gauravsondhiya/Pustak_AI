import express from "express";
import authRoutes from "./routes/auth_routes.js";
import cors from "cors";
import dbcalling from "./config/db.js";
import Chat from './routes/Chat_routes.js'
const app = express();

dbcalling();

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/auth",Chat)


app.get("/", (req, res) => {
  res.send("Pustak_AI running");
});

app.listen(3000, () => {
  console.log("server running");
});
