
import Doc_converter from "../services/Doc_converter.js";
import Supa_data_loader from "../Loaders/Supadata_loader.js";

let Datasave_controller = async (req ,res) =>{
  const { youtube_data, text_data, website_data } = req.body;
   const file_data = req.file;
   
   if (youtube_data||website_data) {
     let response =  await Supa_data_loader(youtube_data||website_data)
        if(!response){
          return res.status(404).json({
          message: "User input not uploaded",
        });
        }
        return res.status(200).json({
          message: "User input successfully uploaded",
        });
    }
   if (text_data) {
     let response =  await Doc_converter(text_data)
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