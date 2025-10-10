import siginuser from "../models/Signin_model.js";
import bycrpt from 'bcrypt'

let Login= async(req,res)=>{
    
    try {
        const{email,password} = req.body
        const emailcheck = await siginuser.findOne({email})
        if(!emailcheck)return res.status(400).json({
            message:"user not found"
        })
        const checkpassword = await bycrpt.compare(password,emailcheck.password)
        if(!checkpassword)return res.status(400).json({
            message:checkpassword
        })
        res.json("Login success")
    } catch (error) {
        console.log(error)
    }
}

export default Login