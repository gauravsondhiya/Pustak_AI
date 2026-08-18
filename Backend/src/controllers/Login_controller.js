import pool from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const Login_Controller = async (req, res) => {
  try {
    let { email, password } = req.body;
   
    if (!email || !password) {
      res.status(400).json("fill all details");
    }
    let email_check = await pool.query("select * from users where email=$1", [
      email,
    ]);

    if (!email_check.rows.length > 0) {
      return res.status(409).json({
        message: "Email not exists",
      });
    }

    let pass_check = await bcrypt.compare(
      password,
      email_check.rows[0].password,
    );
   
    if (!pass_check) {
      return res.status(404).json({
        message: "password not correct",
      });
    }
 const token = jwt.sign({email},
  process.env.SECRET_KEY,
  {
    expiresIn: "3h",
  }
);

res.cookie("authtoken", token)
//    {
//   httpOnly: true,
//   secure: false,
//   maxAge: 3 * 60 * 60 * 1000,
// });
    res.status(200).json({
      message: "login success",
    });

  } catch (error) {
    res.status(404).json({
      message: "server facing some issue",
    });
  }

};

export default Login_Controller;
