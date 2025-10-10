import siginuser from "../models/Signin_model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const Signin = async (req, res) => {
  try { 
    
    const { name, surname, email,password } = req.body;
    const exitinguser = await siginuser.findOne({email})
    if(exitinguser){
      return res.status(400).json({
        message:"user already exists"
      })
    }
    const hashedpassword = await bcrypt.hash(password,10)
    
    const user = new siginuser({ name, surname, email, password:hashedpassword });

    await user.save();

    res.status(201).json({ message: "User created successfully!" });
    
  } 
  catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to save user" });
  }
}

export default Signin