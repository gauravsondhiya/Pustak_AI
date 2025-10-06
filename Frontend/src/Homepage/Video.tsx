import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import demo from "../assets/demo.mp4";
const Video = () => {
  return (
    <div className="w-[80%]  m-auto  grid sm:grid-cols-12 p-5 gap-5">
      <div className="col-span-6 ">
        <FaCloudUploadAlt className="text-8xl" />
        <h1 className='text-2xl font-bold'>Upload your sources</h1>
        <p className='sm:w-[80%] mt-3'>
          Upload PDFs, websites, YouTube videos, audio files, Google Docs, or
          Google Slides, and NotebookLM will summarize them and make interesting
          connections between topics, all powered by Gemini 2.0’s multimodal
          understanding capabilities.
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
