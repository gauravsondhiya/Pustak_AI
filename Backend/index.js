import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";

import dotenv from 'dotenv';
dotenv.config();
// import 'dotenv/config'

async function pdfloader() {
  const resume = "./textresume.pdf";
  const loader = new PDFLoader(resume);
  const docs = await loader.load();
  // docs[0];


  const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004", // 768 dimensions
  // taskType: TaskType.RETRIEVAL_DOCUMENT,
  // title: "Document title",
});

const vectorStore = await QdrantVectorStore.fromDocuments(docs,embeddings,{
  url:"http://localhost:6333",
  collectionName:"gs-resume"
}) 

console.log("done")
}

pdfloader(); 
