import "dotenv/config";
import OpenAI from "openai";
import vectorStore from "../services/Vectorstore.js";

let Chat = async (req, res) => {
  let userinput = req.body.userinput;
  console.log(userinput)
  // res.send(userinput)
  const openai = new OpenAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  });
  const vectorsearch = vectorStore.asRetriever({
    k: 3,
  });

  // vector database may search ho rha ha
  const relventans = await vectorsearch.invoke(userinput);

  const SYSTEM_PROMPT = `
    You are an intelligent AI assistant designed to answer user questions strictly based on the provided context.  
The context may include data extracted from:
- PDF documents (with page numbers)
- YouTube video transcripts (with timestamps)
- Website scraping results (with URLs)
- Text inputs provided directly by the user

Your responsibilities:
1. Answer ONLY based on the given context below.  
2. If the context doesn’t contain the answer, clearly reply:  
   “The available context does not provide enough information to answer this question.”  
3. When answering, **cite your sources** — mention the source type and reference, for example:
   - (Source: PDF, Page 3)
   - (Source: YouTube, 12:45 timestamp)
   - (Source: Website, example.com)
4. Keep responses factual, concise, and in a professional tone.
5. Do not include assumptions, outside knowledge, or opinions.
6. Use markdown formatting for readability when needed.

Context:${JSON.stringify(relventans)}`;

  //  ai unable answer milega yha se
  const response = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content:userinput,
      },
    ],
  });
   console.log(response.choices[0].message.content)
  res.status(200).json(response.choices[0].message.content);
};

export default Chat;
