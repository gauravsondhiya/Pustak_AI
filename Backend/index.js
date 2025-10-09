import express from 'express'
import signin from './routes/signin.js'
const app= express()

app.use(express.json())

app.use("/api/signup",signin)


app.get("/",(req,res)=>{
    res.send("done")
})

app.listen(3000,()=>{
    console.log("server running")
})