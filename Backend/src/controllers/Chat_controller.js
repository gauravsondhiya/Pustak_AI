

const Chat_controller = async (req,res)=>{
    let {userinput} = req.body
    
    res.send("chat controoler"+" " +userinput)
}


export default Chat_controller