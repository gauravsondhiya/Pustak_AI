import { Supadata } from "@supadata/js";
import "dotenv/config"
import Doc_converter from "../services/Doc_converter.js";

const supadata = new Supadata({
  apiKey: process.env.SUPADATA_API_KEY,
});

const Supa_data_loader =async(input_value)=>{

    const transcriptResult = await supadata.transcript({
  url: input_value,
  lang: "en", // optional
 text: true, // optional: return plain text instead of timestamped chunks
 // mode: "auto", // optional: 'native', 'auto', or 'generate'
});

// console.log("supadata se" +" "+ transcriptResult.content)
 let response = await Doc_converter(transcriptResult.content)
 return response

}


export default Supa_data_loader