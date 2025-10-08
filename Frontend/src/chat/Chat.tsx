import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Chat2 from "./Chat2";
const Chat = () => {
  let [filestate, setfilestate] = useState();
  let arrbtn = [
    { btn: "Files", type: "file" },
    { btn: "Website", type: "url" },
    { btn: "Youtube", type: "url" },
    { btn: "Text", type: "text" },
  ];

  let btnclick = (e) => {
    setfilestate(e);
  };
  //  console.log(filestate);
  return (
    <div className=" border grid sm:grid-cols-12 mt-23 sm:h-[600px] ">
      {/* sidebox */}
      <div className="sm:col-span-4 border   p-5">
        {/* title? */}
        <div >
          <h1 className="flex items-center text-2xl gap-4 font-bold">
            <FaUpload />
            Upload Your Sources
          </h1>
        </div>
        {/* button section */}
        <div className="flex justify-between mt-7 items-center ">
          <div
            className="flex gap-1 [&>button]:hover:bg-black [&>button]:hover:text-white
            [&>button]:p-2 [&>button]:text-xl [&>button]:rounded-2xl "
          >
            {arrbtn.map((e, i) => (
              <button onClick={() => btnclick(e.type)} key={i}>
                {e.btn}
              </button>
            ))}
          </div>
          <div>
            <button className="text-xl bg-black text-white font-bold p-2 rounded-2xl">
              New Chat
            </button>
          </div>
        </div>

        <div className="border mt-5 p-2 h-[200px] ">
          {/* url. */}
          <div>
            {filestate == "url" && (
              <div className="mt-3 p-2 flex justify-between items-center content-center">
                <input
                  type="text"
                  className="border w-[75%] h-[60px] rounded-2xl p-3"
                  placeholder="Enter URL"
                />
                <button className="border p-3 mt-2 rounded-2xl w-[90px] ">
                  Add
                </button>
              </div>
            )}
          </div>
          {/* file upload */}
          <div>
            {filestate == "file" && (
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-gray-600 dark:hover:border-blue-500 transition-colors duration-200">
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  accept=".pdf,.csv,.doc,.docx,.txt"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("fileInput")?.click()}
                  className="w-full flex flex-col items-center space-y-2 text-gray-300 hover:text-gray-700 dark:hover:text-blue-400"
                >
                  Upload Files
                  <span className="font-medium">
                    Upload PDF, CSV, Word documents, or text files
                  </span>
                  <span className="text-sm">Maximum file size: 5MB</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Supported: .pdf, .csv, .doc, .docx, .txt
                  </span>
                </button>
              </div>
            )}
          </div>
          {/* text input */}

          <div>
            {filestate == "text" && (
              <div>
                <textarea
                  placeholder="Enter your text here (up to 5000 words)..."
                  rows="8"
                  maxlength="25000"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white  text-gray-900  placeholder-black-50 focus:ring-2 focus:border-transparent resize-none h-[130px]"
                ></textarea>
                <div class="flex justify-between items-center">
                 
                  <button
                    disabled=""
                    class="px-4 mt-2 py-2  hover:bg-black bg-gray-400 text-white 
                    rounded-2xl font-medium transition-colors duration-200 flex items-center 
                    space-x-2"
                  >
                  
                    <span>Submit Text</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>

      {/* chat box */}
      <div className="sm:col-span-8">
      <div className=''>
      <div className=" p-6 border border-gray-400  ">
        <h1 className="text-2xl font-bold">Chat</h1>
        <p>Ask questions about your uploaded sources</p>
      </div>
      <div>
        chat screen
      </div>

      <div className="border p-5 mt-[369px]  w-full flex gap-3">
        <input type="text" placeholder="Add a question about your sources..."
        className="border w-[90%] rounded-2xl p-4 focus:ring-2"/>
         <button className="border p-2 w-[80px] rounded-2xl">Send</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Chat;
