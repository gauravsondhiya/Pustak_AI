import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { BackgroundRippleEffect } from "../components/ui/background-ripple-effect";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { AiFillOpenAI } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import Intro2 from "./Intro2";
import Video from "./Video";

const Intro = () => {
  return (
    <div >
      <div className="relative flex flex-col items-start justify-start  border-red-500">
        <BackgroundRippleEffect/>
        <div className="mt-60 w-[90%] m-auto   text-center">
          <h1 className=" flex items-center justify-center gap-3 font-bold text-neutral-800 text-7xl  ">
            पुस्तक AI <LuBrainCircuit />
          </h1>
          {/* <h2 className="text-2xl mt-3">Your AI-Powered Notebook</h2> */}
          <p className="  text-neutral-800 sm:text-4xl text-2xl flex items-center gap-4 justify-center mt-4">
           Your AI-Powered Notebook that truly knows your data.
          </p>
        </div>
        
      </div>

        {/* three process intro? */}


        <div className="border mt-10 border-neutral-800 w-[60%] m-auto p-5 grid sm:grid-cols-12 gap-10 sm:gap-0 rounded-2xl">
        <div className=" flex flex-col items-center font-bold  sm:col-span-4">
          <MdOutlineDocumentScanner className="text-6xl " />
          <h1 className="font-semibold">Upload Files</h1>
          <p className="text-sm text-gray-600">
            PDF, Docs, or Images in seconds
          </p>
        </div>

        <div className="flex flex-col items-center font-bold sm:col-span-4">
          <LuBrain className="text-6xl" />
          <h1 className="font-semibold">Ask Questions</h1>
          <p className="text-sm text-gray-600">
            Chat with your files and get instant insights
          </p>
        </div>

        <div className="flex flex-col items-center font-bold sm:col-span-4">
          <AiFillOpenAI className="text-6xl " />
          <p className="font-semibold">Smart Answers</p>
          <p className="text-sm text-gray-600">
            Accurate results with trusted references
          </p>
        </div>
      </div>
       <div>

      <Intro2 />
       </div>
       <Video/>
    </div>
  );
};

export default Intro;
