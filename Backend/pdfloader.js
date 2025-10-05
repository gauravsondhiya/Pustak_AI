import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";
import dotenv from 'dotenv';
dotenv.config();
async function pdfload() {
    const file = "./textresume.pdf"
    const loader = new PDFLoader(file)
    const docs = await loader.load()
    // return docs[0]

   const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004", 
  });
//   console.log(embeddings)
  const vectorStore = await QdrantVectorStore.fromDocuments(docs,embeddings,{
    url:'https://b3449b43-d3ff-420c-959d-e9191b3ceae5.eu-west-2-0.aws.cloud.qdrant.io:6333',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.WfOn_v2TMOiplSDt5xT-WIr8bKTri90XG960BylsAJY',
    collectionName:"gs-resume"
  })
  console.log(vectorStore)
}

pdfload()