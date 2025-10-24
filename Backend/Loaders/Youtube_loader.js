import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import vectorStore from "../services/Vectorstore.js";

 let youtube = async(value)=> {
  try {
    const loader = YoutubeLoader.createFromUrl(value, {
      language: "en",
      addVideoInfo: true,
    });

   let youtube_loader_data = await loader.load();
   await vectorStore.addDocuments(youtube_loader_data);
      console.log("YouTube data embedded and uploaded ✅")
    return true
  } catch (error) {
    console.error("Error loading YouTube video:", error);
    return null;
  }
}

export default youtube;