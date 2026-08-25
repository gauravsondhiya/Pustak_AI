import {QdrantClient} from '@qdrant/js-client-rest';
import "dotenv/config"

const Qdrant_client = new QdrantClient({
   url: process.env.QDRANT_URL,
    apiKey: process.env.QDRANT_DB_API_KEY,
});

console.log("qdrantdb connected")

export default Qdrant_client;
