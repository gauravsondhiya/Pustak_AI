
let Datasave = async(req,res)=>{

    let data = req.body
  console.log("line 5")
  console.log(data)
  res.send(data)
   
    // console.log("File uploaded:");
  // res.json({
  //   message: "File uploaded successfully!",
  //   file: req.file,
  // });
}


export default Datasave