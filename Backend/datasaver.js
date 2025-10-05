import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";

import dotenv from 'dotenv';
dotenv.config();


async function pdfloader() {

  // pdf database may store hogya
  const resume = "./textresume.pdf";
  const loader = new PDFLoader(resume);
  const docs = await loader.load();
 

  
  const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004", 
});
    //  vector embeddings bn gyi
  // ab vector embeddings vector database may stor ho rhi ha 
const vectorStore = await QdrantVectorStore.fromDocuments(docs,embeddings,{
  url:'https://b3449b43-d3ff-420c-959d-e9191b3ceae5.eu-west-2-0.aws.cloud.qdrant.io:6333',
  apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.WfOn_v2TMOiplSDt5xT-WIr8bKTri90XG960BylsAJY',
  collectionName:"gs-resume"
}) 

console.log("done")
}

pdfloader(); 
