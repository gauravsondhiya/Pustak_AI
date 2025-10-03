import React from "react";
import { LuFileSearch2 } from "react-icons/lu";
import { IoSend } from "react-icons/io5";

const Chat = () => {
  return (
    <div className="border border-red-600 flex h-full">
      {/* source  */}
      <div className="border border-white w-[40%] p-9">
        <h1 className="text-2xl">Source</h1>

        <div className="flex justify-between [&>button]:border [&>button]:w-[100px] [&>button]:p-2 mt-7 [&>button]:rounded-xl">
          <button>Files</button>
          <button>Website</button>
          <button>Youtube</button>
          <button>Text</button>
        </div>
        {/* inputbox */}

        <div className="flex mt-5 justify-between ">
          <input
            type="text"
            className="border w-[75%] h-14 rounded-xl text-xl p-2"
          />
          <button className="border w-[20%] text-2xl rounded-xl items-center flex gap-2 p-3">
            <LuFileSearch2 className="" />
            Add
          </button>
        </div>

        {/* processing side */}
        <div></div>
      </div>

      {/* chat  */}

      <div className="border w-[60%] max-h-full">
        {/* heading ? */}
        <div className="p-6 border">
          <h1 className="text-3xl">Chat</h1>
          <p>Ask Questions About Your Uploaded Sources</p>
        </div>

        {/* chats */}
        <div>


        </div>

        <div className="flex justify-between border p-5 ">
          <input
            type="text"
            placeholder="Ask your question related to your source"
            className="border w-[80%] h-14 rounded-xl text-xl p-2"
          />
          <button className="border w-[15%] text-2xl rounded-xl flex items-center gap-2 p-3">
            <IoSend />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
