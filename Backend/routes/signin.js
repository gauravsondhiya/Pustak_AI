import express from 'express'
const router = express.Router();
import usermodel from '../models/signin_models.js';

router.post("/signup",async (req,res)=>{
    let name =req.body.name
    let surname = req.body.surname
     const datasave = new usermodel({name,surname})
     datasave.save() 
    res.send("datadone")
})


export default router