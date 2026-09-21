import Embeddings from "../Models/Embedings.js"
import { QdrantVectorStore } from "@langchain/qdrant";
import Qdrant_client from "../config/Qudrant_db.js";
import OpenAI from "openai";

import 'dotenv/config'

const openai  = new OpenAI({
     apiKey: process.env.GROQ_API_KEY ,
    baseURL:process.env.GROQ_BASE_URL ,
     
});

const Chat_controller = async (req,res)=>{
    let {userinput} = req.body


     const vectorStore = await QdrantVectorStore.fromExistingCollection(
    Embeddings,
    {
     client: Qdrant_client,
     collectionName: "Pustak_AI_DB",
    }
  );

    const vectorSearcher = vectorStore.asRetriever({
    k: 3,
  });

   const relevantChunk = await vectorSearcher.invoke(userinput);

     const SYSTEM_PROMPT = `
   You are an AI assistant who helps resolving user query based on the
    context available to you from user inputs with the content ,link , paragraph , website ,pdf with page number.
    Only answer based on the available context from the various input.
    Context:
    ${JSON.stringify(relevantChunk)} `;

    const response = await openai.chat.completions.create({
     model: "openai/gpt-oss-20b",
    messages: [
        {   role: "system",
            content: SYSTEM_PROMPT
        },
        {
            role: "user",
            content: userinput,
        },
    ],
});

console.log(response.choices[0].message.content);

    res.json(response.choices[0].message.content)
}


export default Chat_controller