import express from "express";
const router = express.Router();
import usermodel from "../models/signin_models.js";

router.post("/signup", async (req, res) => {
  try {
    const { name, surname, email } = req.body;
    const user = new UserModel({ name, surname, email });
    await user.save();
    res.status(201).json({ message: "User created successfully!" });
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to save user" });
  }
});

export default router;
