import express from 'express'
import chat from './routes/chat.js'
const app= express()

app.use(express.json())

app.use('/api/chat',chat)

app.get("/",(req,res)=>{
    res.send("done")
})



app.listen(3000,()=>{
    console.log("server running")
})