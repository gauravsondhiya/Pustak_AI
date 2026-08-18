import user_table from "../models/Signin_model.js";
import bcrypt from "bcrypt";

const Signin = async (req, res) => {

  try {
    const { name, surname, email, password } = req.body;
    const exitinguser = await user_table.findOne({ email });
    
    if (exitinguser) {
      return res.status(400).json({
        message: "user already exists",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new user_table({
      name,
      surname,
      email,
      password: hashedpassword,
    });
    await user.save();
    res.status(201).json("data saved");

  } 
    catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save user" });
  }
};

export default Signin;
