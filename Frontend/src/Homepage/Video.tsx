import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import demo from "../assets/demo.mp4";
const Video = () => {
  return (
    <div className="w-[80%]  m-auto  grid sm:grid-cols-12 p-5 gap-5">
      <div className="col-span-6 ">
        <FaCloudUploadAlt className="text-8xl" />
        <h1 className='text-2xl font-bold'>Upload your sources</h1>
        <p className='sm:w-[80%] mt-3 font-semibold text-gray-500'>
          Pustak AI turns PDFs, web pages, YouTube videos, Google Docs, and Slides into searchable knowledge. Upload or link your content, and Pustak_AI will extract text, transcribe audio, chunk and embed it, then serve instant, context-aware answers and cross-document insights using a multimodal model. No jargon: you upload, we index, you ask — we answer with citations and relevant connections.
        </p>
      </div>
      <div className="col-span-6">
        <video
          className="rounded-3xl "
          src={demo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Video;
