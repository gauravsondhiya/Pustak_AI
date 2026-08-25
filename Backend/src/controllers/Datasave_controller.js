
import Doc_converter from "../services/Doc_converter.js";

let Datasave_controller = async (req ,res) =>{
  const { youtube_data, text_data, website_data } = req.body;
   const file_data = req.file;

 
   if (youtube_data|| text_data||website_data) {
     let response =  await Doc_converter(youtube_data|| text_data||website_data)
        if(!response){
          return res.status(404).json({
          message: "User input not uploaded",
        });
        }
        return res.status(200).json({
          message: "User input successfully uploaded",
        });
    }

}

export default Datasave_controller