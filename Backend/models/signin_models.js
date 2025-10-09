import mongoose, { Schema } from "mongoose";
const signinuser = new Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true, 
    }

})
let usermodel= mongoose.model("signuptable",signinuser)
export default usermodel ;