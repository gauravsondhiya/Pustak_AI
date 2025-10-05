import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";
import "dotenv/config";
import OpenAI from "openai";


const openai = new OpenAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});
export const handlechat= async(req,res)=>{
   const userquery = req.body.chat;

   const embeddings = new GoogleGenerativeAIEmbeddings({
        model: "text-embedding-004", // 768 dimensions
      });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
        embeddings,
        {
          url: "http://localhost:6333",
          collectionName: "gs-resume",
        }
      );

}