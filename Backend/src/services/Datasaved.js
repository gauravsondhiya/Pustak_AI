import { QdrantVectorStore } from "@langchain/qdrant";
import "dotenv/config";
import Embeddings from "../Models/Embedings.js";
import Qdrant_client from "../config/Qudrant_db.js";

const Data_saved = async (data)=>{
  try {
     let recived_data  = await data
      await QdrantVectorStore.fromDocuments(
     recived_data,
      Embeddings,
      {
        client:Qdrant_client,
        // url: process.env.QDRANT_URL,
        // apiKey: process.env.QDRANT_DB_API_KEY,
        collectionName: "Pustak_AI_DB",
      },
    );
  
    console.log("datasaved")
    return true
  }
   catch (error) {
    console.log(error)
      return false
  }
}
export default Data_saved
