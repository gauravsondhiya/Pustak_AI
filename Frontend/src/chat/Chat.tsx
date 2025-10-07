import React from "react";
import { FaUpload } from "react-icons/fa";

const Chat = () => {
  return (
    <div className=" border grid sm:grid-cols-12 mt-30 h-auto">
      {/* sidebox */}
      <div className="col-span-4 border h-[600px] p-5">

        {/* title? */}
        <div>
          <h1 className="flex items-center text-2xl gap-4 font-bold">
            <FaUpload />
            Upload Your Sources
          </h1>
        </div>

        <div className="flex justify-between mt-7">
          <div className="flex gap-4 [&>button]:hover:bg-black [&>button]:hover:text-white
            [&>button]:p-2 [&>button]:text-xl [&>button]:rounded-2xl ">
            <button>Files</button>
            <button>Website</button>
            <button>Youtube</button>
            <button>Text</button>
          </div>
          <div>
            <button>New Chat</button>
          </div>
        </div>
        <div></div>
      </div>
      {/* chat box */}
      <div className="col-span-7"></div>
    </div>
  );
};

export default Chat;
