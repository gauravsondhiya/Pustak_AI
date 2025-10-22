
let Datasave = async(req,res)=>{
 console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  // console.log("Query:", req.query);
  // console.log("Params:", req.params);
  res.send("Logged everything!");
  //   let data = req.body
  // console.log("line 5")
  // console.log(data)
  // res.send(data)

   
    // console.log("File uploaded:");
  // res.json({
  //   message: "File uploaded successfully!",
  //   file: req.file,
  // });
}


export default Datasave