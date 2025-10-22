import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const datafile = "./uploads/";

const file_loader = new PDFLoader(datafile);


export default file_loader