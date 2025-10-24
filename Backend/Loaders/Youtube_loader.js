import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";


export let youtube = async(value)=> {
  try {
    const loader = YoutubeLoader.createFromUrl(value, {
      language: "en",
      addVideoInfo: true,
    });

   let youtube_loader_data = await loader.load();
    return youtube_loader_data;
  } catch (error) {
    console.error("Error loading YouTube video:", error);
    return null;
  }
}

