import { QdrantVectorStore } from "@langchain/qdrant";
import embeddings_convert from "../models/Embeding_Model.js";
import qdrant_client from "../config/Qudrant.js";

const vectorStore = await QdrantVectorStore.fromExistingCollection(
  embeddings_convert,
  {
    client: qdrant_client,
    collectionName: "Pustak_AI_data",
  }
);

export default vectorStore;
