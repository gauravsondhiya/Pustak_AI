import mongoose, { Schema } from "mongoose";

const Loginuser= new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
export default Loginuser
