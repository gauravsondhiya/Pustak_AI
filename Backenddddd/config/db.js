import mongoose from "mongoose";
import "dotenv/config";

let dbcalling =async ()=>{
  try {
     await mongoose.connect(process.env.MONGODB_URL)
     console.log("DB connneted")
  
  } catch (error) {
    console.log(error)
  }
}
export default dbcalling