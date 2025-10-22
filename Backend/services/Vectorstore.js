
import { QdrantVectorStore } from "@langchain/qdrant";

// Example for PDF
const pdfVectorStore = await QdrantVectorStore.fromDocuments(pdfDocs, pdfEmbeddings, {
  client,
  collectionName: "PUSTAK_AI_PDF_DATA",
});

// Example for YouTube transcripts
const ytVectorStore = await QdrantVectorStore.fromDocuments(youtubeDocs, ytEmbeddings, {
  client,
  collectionName: "PUSTAK_AI_PDF_DATA",
});

// Example for plain text
const textVectorStore = await QdrantVectorStore.fromDocuments(textDocs, textEmbeddings, {
  client,
  collectionName: "PUSTAK_AI_PDF_DATA",
});
