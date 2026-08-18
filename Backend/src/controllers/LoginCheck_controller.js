import pool from "../config/db.js";

const LoginCheck_controller = async (req,res)=>{
    let email = req.user.email
   const user = await pool.query('select firstname from users where email=$1',[email]);
  if(!user.rows[0]>0){
    res.json("no data")
  }
  res.json(user.rows[0]);
}

export default LoginCheck_controller