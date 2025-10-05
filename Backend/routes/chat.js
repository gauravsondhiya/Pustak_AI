import express from 'express'
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";
import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});
const router = express.Router();
const app = express()

app.use(express.json())

router.post("/post",async(req,res)=>{
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
    
    
      const vectorsearch = vectorStore.asRetriever({
        k: 3,
      });
    
      
      const relventans = await vectorsearch.invoke(userquery);
    
      const SYSTEM_PROMPT = `
        You are an AI assistant who helps resolving user query based on the
        context available to you from a PDF file with the content and page number.
    
        Only ans based on the available context from file only.
    
        Context:
        ${JSON.stringify(relventans)}
      `;
    
      const response = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: userquery,
          },
        ],
      });
    
      res.send(response.choices[0].message.content);
})


export default router