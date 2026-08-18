import mongoose, { Schema } from "mongoose";

const Signinuser = new Schema({
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
    },
    password:{
        type:String,
        required:true
    }

})
let user_table= mongoose.model("signuptable",Signinuser)
export default user_table ;