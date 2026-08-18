import pool from "../config/db.js";
import bcrypt from "bcrypt";

const Signup_controller = async (req, res) => {
  try {
    let { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      res.status(204).json("fill all the details");
    }
    
    let email_check = await pool.query(`select * from users where email= $1`, [
      email,
    ]);

    if (email_check.rows.length > 0) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    let data_save = `insert into users(firstname ,lastname, email,password) values ($1,$2,$3,$4)RETURNING *`;
    let values = [firstname, lastname, email, hashedpassword];

    let response = await pool.query(data_save, values);

    res.status(201).json({
      message: "data save succesfully",
    });

  } catch (error) {
    console.log(error);
    res.status(404).json("backend facing some error");
  }
};

export default Signup_controller;
