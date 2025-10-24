import React, { useState } from "react";

const Chat2 = () => {

  let [userinput,setuserinput] = useState()
  let [aioutput,setaioutput] = useState("LLM output")


  let send =()=>{
    console.log("done")
  }
  return (
      <div className="sm:col-span-8">
        <div className="">
          <div className=" p-6 border border-gray-400  ">
            <h1 className="text-2xl font-bold">Chat</h1>
            <p>Ask questions about your uploaded sources</p>
          </div>
             {/* chat scrren */}
          <div className="border h-full ">
                 {/* userinput */}
                  <div>
                      {userinput}
                  </div>
                  {/* llm output */}
                  <div>
                      {aioutput}
                  </div>
          </div>
              
          <div className="border p-5 mt-[369px]  w-full flex gap-3">
            <input
              type="text"
              
              onChange={(e)=>setuserinput(e.target.value)}
              placeholder="Add a question about your sources..."
              className="border w-[90%] rounded-2xl p-4 focus:ring-2"
            />
            <button onClick={send} className="border p-2 w-[80px] rounded-2xl">Send</button>
          </div>
        </div>
      </div>
  );
};

export default Chat2;





