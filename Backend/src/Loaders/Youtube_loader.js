import { SupadataLoader } from "@supadata/langchain-js";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

const loader = new SupadataLoader({
  apiKey: process.env.SUPADATA_API_KEY,
});

const youtube_link = async (data) => {
  const docs = await loader.load({
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    operation: "metadata",
  });

  console.log(docs[0].pageContent);
};

export default youtube_link