import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import "dotenv/config"

const embeddings_convert = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
});

console.log("embedding method called")

export default embeddings_convert;