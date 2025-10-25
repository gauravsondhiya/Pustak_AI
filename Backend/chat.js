import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";
import "dotenv/config";
import OpenAI from "openai";



async function chat() {
  //  user ka question
  const userquery = "what is the context of jamelle";

  // question vector embeddings may convert hoga
  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "text-embedding-004", // 768 dimensions
  });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embeddings,
     {
    client: qdrant_client,
    collectionName: "Pustak_AI_data",
  }
  );

  const vectorsearch = vectorStore.asRetriever({
    k: 3,
  });

  // vector database may search ho rha ha
  const relventans = await vectorsearch.invoke(userquery);

  const SYSTEM_PROMPT = `
    You are an AI assistant who helps resolving user query based on the
    context available to you from a PDF file with the content and page number.

    Only ans based on the available context from file only.

    Context:
    ${JSON.stringify(relventans)}
  `;

  //  ai unable answer milega yha se
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

  console.log(response.choices[0].message.content);
}

chat();
