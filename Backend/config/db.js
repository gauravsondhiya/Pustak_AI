import mongoose from "mongoose";
import "dotenv/config";

let dbcalling =async ()=>{
  try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log("DB connneted")
  
  } catch (error) {
    console.log(error)
  }
}
export default dbcalling