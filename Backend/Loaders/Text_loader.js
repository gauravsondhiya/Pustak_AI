import { TextLoader } from "langchain/document_loaders/fs/text";

const loader = new TextLoader(
  "./uploads/text.txt"
);


const text_loader = await loader.load();

export default text_loader;