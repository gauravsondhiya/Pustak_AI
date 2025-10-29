import siginuser from "../models/Signin_model.js";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
let Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email)
    const emailcheck = await siginuser.findOne({ email });
    if (!emailcheck)
      return res.status(400).json({
        message: "user not found",
      });
    const checkpassword = await bycrpt.compare(password, emailcheck.password);
    if (!checkpassword)
      return res.status(400).json({
        message: checkpassword,
      });

    const token = jwt.sign({ email, password }, process.env.Secret_key, {
      expiresIn: "3h",
    });
    // console.log(token);
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
  }
};

export default Login;
