import "dotenv/config"
import jwt from 'jsonwebtoken'

const Protected_routes=(req,res)=>{
    try {
         let token = req.headers.authorization
       
        
        const check = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdXJhdkAxMjMuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3NjE2NTM2NzQsImV4cCI6MTc2MTY1NzI3NH0.F_lT6m0WtfnHMx1Xu7OTc2jYz38BFp0gtdWfI1sM71w',process.env.Secret_key)
        console.log(check)
        res.json({message:"kuch to hua"})
    } catch (error) {
         console.log(error)
         res.json("kuch nhi hua")
    }

}

export default Protected_routes;