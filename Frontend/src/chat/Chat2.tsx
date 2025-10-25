import axios from "axios";
import React, { useState } from "react";

const Chat2 = () => {
  let [userinput, setuserinput] = useState("");
  let [datapass, setdatapass] = useState([]);

  let [aioutput, setaioutput] = useState("LLM output");

  let get_fetch_data = async () => {
    console.log(userinput);
    try {
      let response = await await axios.post(
        "http://localhost:3000/api/auth/chat",
        { userinput }, // send as object
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      setTimeout(() => {
        let botreply = {
          id: Date.now(),
          msgsend: response.data,
          sender: "bot",
        };
        setdatapass((pre) => [...pre, botreply]);
      }, 1000); // 1 second delay for realism
    } catch (error) {
    console.log(error);
    }
    
  };

  let sendbtn = () => {
    get_fetch_data();

    let send = { id: Date.now(), msgsend: userinput, sender: "user" };
    setdatapass((pre) => [...pre, send]);

    setuserinput(" ");
  };

  return (
    <div className="sm:col-span-8 h-[600px] border border-amber-400">
      <div className=" p-3 border border-gray-400  h-[15%] ">
        <h1 className="text-2xl font-bold">Chat</h1>
        <p>Ask questions about your uploaded sources</p>
      </div>

      {/* chat scrren */}
      <div className="border border-4 border-red-500 h-[70%] p-4">
        {datapass.map((e, i) => (
          <div
            key={i}
            className={`flex  ${
              e.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`border px-4 py-2 rounded-2xl max-w-xs break-words ${
                e.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {e.msgsend}
            </div>
          </div>
        ))}
      </div>

      <div className="border p-5 flex gap-3 h-[15%]">
        <input
          type="text"
          value= {userinput}
          onChange={(e) => setuserinput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendbtn()}
          placeholder="Add a question about your sources..."
          className="border w-[90%] rounded-2xl p-4 focus:ring-2"
        />
        <button onClick={sendbtn} className="border p-2 w-[80px] rounded-2xl">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat2;
