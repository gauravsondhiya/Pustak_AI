import express from 'express'
import authRoutes from "./routes/auth_routes.js"
import dbcalling from './config/db.js'

dbcalling()
const app= express()

app.use(express.json())

app.use("/api/auth",authRoutes)


app.get("/",(req,res)=>{
    res.send("done")
})

app.listen(3000,()=>{
    console.log("server running")
})