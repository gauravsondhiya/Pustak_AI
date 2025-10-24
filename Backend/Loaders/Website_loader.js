import "@mendable/firecrawl-js";
import { FireCrawlLoader } from "@langchain/community/document_loaders/web/firecrawl";
import "dotenv/config";
import vectorStore from "../services/Vectorstore.js";

let website_loader = async (inputvalue) => {
  console.log(inputvalue)
  try {
    const loader = new FireCrawlLoader({
      url: inputvalue,
      apiKey: process.env.FIRECRAWL_API_KEY,
      mode: "scrape",
    });
    const docs = await loader.load();
    await vectorStore.addDocuments(docs);
    console.log("✅ Documents successfully added to Qdrant!");

  } catch (error) {
    console.log(error);
  }
}

export default website_loader;
