import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import Datasaved from './Datasaved.js'
import { Document } from "@langchain/core/documents";


const Doc_converter = async (input_value) => {
try {
  const data = [
    new Document({
      pageContent: input_value,
      metadata: {
        source: "User Input Data",
      },
    }),
  ];
        const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 100, chunkOverlap: 0 })
        const split_texts =await splitter.splitDocuments(data)
        let response =await Datasaved(split_texts)
        return response
} catch (error) {
  console.log(error)
  return false
}
   
  }

export default Doc_converter