 import {QdrantClient} from '@qdrant/js-client-rest';

 const qdrantdb = async ()=>{
    try {
      const client = new QdrantClient({
       url: 'https://b3449b43-d3ff-420c-959d-e9191b3ceae5.eu-west-2-0.aws.cloud.qdrant.io:6333',
       apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.fc5n8M_l7YgsgPDpOggCi1hcsYO3owDNjQZjr4MzWYc',
     });
     console.log("qdrantdb connected")
      return client
   } catch (error) {
       console.error(error);
   }
 }

 export default qdrantdb ; 

 