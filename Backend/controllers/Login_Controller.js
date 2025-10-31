import siginuser from "../models/Signin_model.js";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
let Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email)
    const data_check = await siginuser.findOne({ email });
    if (!data_check)
      return res.status(400).json({
        message: "user not found",
      });
    const checkpassword = await bycrpt.compare(password, data_check.password);
    if (!checkpassword)
      return res.status(400).json({
        message: checkpassword,
      });

    const token = jwt.sign({ email, password }, process.env.Secret_key, {
      expiresIn: "3h",
    });
    // console.log(token);
    res.json({ message: "Login successful",status:true, token,username:data_check.name });
  } catch (error) {
    console.log(error);
  }
};

export default Login;
