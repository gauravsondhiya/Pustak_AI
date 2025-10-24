import {QdrantClient} from '@qdrant/js-client-rest';
import "dotenv/config"

const qdrant_client = new QdrantClient({
   url: process.env.QDRANT_URL,
    apiKey: process.env.QDRANT_APIKEY,
});

console.log("qdrant client connected")
export default qdrant_client;
