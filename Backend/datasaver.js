// import { QdrantVectorStore } from "@langchain/qdrant";
// import { QdrantClient } from "@qdrant/js-client-rest";
// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
// import "dotenv/config";
// import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
// import qdrantdb from "./config/Qudrant.js";
//  import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
// import "@mendable/firecrawl-js";
// import { FireCrawlLoader } from "@langchain/community/document_loaders/web/firecrawl"
import { TextLoader } from "@langchain/classic/document_loaders/fs/text";


//  1️⃣ Your data loading 

// file data 
// const resume = "./uploads/";
// const loader = new PDFLoader(resume);
// const docs = await loader.load();
// docs[0];
// console.log(docs)

//  youtube data
// const loader = YoutubeLoader.createFromUrl("https://youtu.be/30LWjhZzg50?si=tUNR0v86QW2-h-l9", {
//   language: "en",
//   addVideoInfo: true,
// });

// const docs = await loader.load();

// console.log(docs);


// website data

// const loader = new FireCrawlLoader({
//   url: "https://firecrawl.dev", // The URL to scrape
//   apiKey: process.env.FIRECRAWL_API_KEY, // Optional, defaults to `FIRECRAWL_API_KEY` in your env.
//   mode: "scrape", // The mode to run the crawler in. Can be "scrape" for single urls or "crawl" for all accessible subpages
// })
// const docs = await loader.load()
// console.log(docs[0])



const loader = new TextLoader("./uploads/file.txt")

const docs = await loader.load()
console.log(docs[0])

// 2️⃣Create embedding model
// const embeddings = new GoogleGenerativeAIEmbeddings({
//   model: "text-embedding-004",
// });

// 3️⃣ Create Qdrant client manually
// const client = await new QdrantClient({
//   url: "https://b3449b43-d3ff-420c-959d-e9191b3ceae5.eu-west-2-0.aws.cloud.qdrant.io:6333",
//   apiKey:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.fc5n8M_l7YgsgPDpOggCi1hcsYO3owDNjQZjr4MzWYc",
// });
//  let client = await qdrantdb()
// console.log(client)


// 4️⃣ Store the data
const vectorStore = await QdrantVectorStore.fromDocuments(docs,embeddings, {
 url:"",
  collectionName: "PUSTAK_AI_PDF_DATA",
});

// console.log(vectorStore)


