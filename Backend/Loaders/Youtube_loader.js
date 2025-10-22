import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";

const loader = YoutubeLoader.createFromUrl("https://youtu.be/bZQun8Y4L2A", {
  language: "en",
  addVideoInfo: true,
});

const youtube_loader= await loader.load();

export default youtube_loader;