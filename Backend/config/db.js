import mongoose from "mongoose";

let dbcalling =async ()=>{
  try {
     let connection = await mongoose.connect(
    "mongodb+srv://pustak:qwe123@pustakai.ukeyhvh.mongodb.net/?retryWrites=true&w=majority&appName=Pustakai")
    console.log("db connnected")
  
  } catch (error) {
    console.log(error)
  }
//    console.log(connection)
}
dbcalling()