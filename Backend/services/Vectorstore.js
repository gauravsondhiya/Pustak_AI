import { QdrantVectorStore } from "@langchain/qdrant";
import embeddings_convert from "../models/Embeding_Model.js";
import qdrant_client from '../config/Qudrant.js'

import {QdrantClient} from '@qdrant/js-client-rest';

const qdrant_client = new QdrantClient({
   url: 'https://b3449b43-d3ff-420c-959d-e9191b3ceae5.eu-west-2-0.aws.cloud.qdrant.io:6333',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.0hpaUUjaHDr1xacy4p1RYPr2ayJmwPcUrOvgsvYYsJY',
});


const vectorStore = await QdrantVectorStore.createCollection(youtube_loader_data,embeddings_convert, {
  qdrant_client,
  collectionName: "Pustak_AI_data",
});

console.log("data uploaded")