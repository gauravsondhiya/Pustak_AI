import { youtube } from "../Loaders/Youtube_loader.js";
import { QdrantVectorStore } from "@langchain/qdrant";
import embeddings_convert from "../models/Embeding_Model.js";
import qdrant_client from "../config/Qudrant.js";

let Datasave = async (req, res) => {
  try {
    const { youtube_data } = req.body;

    if (youtube_data) {
      // Step 1: Load from YouTube
      const youtube_loader_data = await youtube(youtube_data);

      // Step 2: Upload to Qdrant
      const vectorStore = await QdrantVectorStore.fromExistingCollection(
        embeddings_convert,
        {
          client: qdrant_client,
          collectionName: "testing",
        }
      );

      // ✅ now safely add new documents
      await vectorStore.addDocuments(youtube_loader_data);

      // Add documents to your collection
      // await vectorStore.addDocuments(youtube_loader_data);

      console.log("YouTube data embedded and uploaded ✅");
      return res.status(200).json({ message: "Data processed successfully" });
    }

    res.status(400).json({ message: "No YouTube data provided" });
  } catch (error) {
    console.error("Error in Datasave:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default Datasave;
