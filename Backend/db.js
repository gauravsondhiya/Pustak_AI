import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { TextLoader } from "@langchain/classic/document_loaders/fs/text";
import "dotenv/config";
import { SupadataLoader } from "@supadata/langchain-js";

const textloader = new TextLoader("./upload/File.txt");
const text_docs = await textloader.load();
// console.log(docs[0]);

const youtube_loader = new SupadataLoader({
  apiKey: process.env.SUPADATA_API_KEY,
    url: "https://youtu.be/4fndeDfaWCg?si=Ywdc3LfCjm9p8phB",
});

const youtube_docs = await youtube_loader.load()
const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001",
});


const vectorStore = await QdrantVectorStore.fromDocuments(youtube_docs, embeddings, {
  url: process.env.QDRANT_URL,
  apiKey: process.env.QDRANT_DB_API_KEY,
  collectionName: "Pustak_AI_DB",
});
console.log(vectorStore);