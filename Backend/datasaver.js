import { QdrantVectorStore } from "@langchain/qdrant";
import { QdrantClient } from "@qdrant/js-client-rest";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import "dotenv/config";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import qdrantdb from "./config/Qudrant.js";

//  1️⃣ Your data
const resume = "./textresume.pdf";
const loader = new PDFLoader(resume);
const docs = await loader.load();
docs[0];


// 2️⃣Create embedding model
const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
});

// 3️⃣ Create Qdrant client manually
// const client = await new QdrantClient({
//   url: "https://b3449b43-d3ff-420c-959d-e9191b3ceae5.eu-west-2-0.aws.cloud.qdrant.io:6333",
//   apiKey:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.fc5n8M_l7YgsgPDpOggCi1hcsYO3owDNjQZjr4MzWYc",
// });
 let client = await qdrantdb()
// console.log(client)
// 4️⃣ Store the data
const vectorStore = await QdrantVectorStore.fromDocuments(docs,embeddings, {
 client,
  collectionName: "langchainjs-testing",
});

console.log(vectorStore)


